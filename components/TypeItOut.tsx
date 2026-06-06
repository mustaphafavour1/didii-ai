'use client'

/**
 * TypeItOut — simulates a real human typing text character by character.
 *
 * Features
 * • Variable per-character delay (40–110 ms) with natural pauses at punctuation
 * • Realistic typos: types an adjacent wrong key, pauses, backspaces, corrects
 * • Blinking caret while typing
 * • Scroll-triggered (IntersectionObserver) by default; pass `trigger` prop for
 *   manual control (e.g. inside the ChatDemo orchestrator)
 * • Respects prefers-reduced-motion — renders full text instantly when set
 * • Fires optional onComplete() callback when the sequence finishes
 */

import { useCallback, useEffect, useRef, useState } from 'react'

// ─── Adjacent keyboard keys for believable typos ──────────────────────────
const ADJACENT: Record<string, string[]> = {
  a: ['s', 'q', 'z'],   b: ['v', 'n', 'g'],   c: ['x', 'd', 'v'],
  d: ['s', 'e', 'f'],   e: ['w', 'r', 'd'],   f: ['d', 'g', 'r'],
  g: ['f', 'h', 't'],   h: ['g', 'j', 'y'],   i: ['u', 'o', 'k'],
  j: ['h', 'k', 'u'],   k: ['j', 'l', 'i'],   l: ['k', 'o'],
  m: ['n', 'j'],        n: ['b', 'm', 'h'],   o: ['i', 'p', 'l'],
  p: ['o', 'l'],        q: ['w', 'a'],        r: ['e', 't', 'f'],
  s: ['a', 'd', 'w'],   t: ['r', 'y', 'g'],   u: ['y', 'i', 'j'],
  v: ['c', 'b', 'f'],   w: ['q', 'e', 's'],   x: ['z', 'c', 's'],
  y: ['t', 'u', 'h'],   z: ['a', 's', 'x'],
  '0': ['9'], '1': ['2', 'q'], '2': ['1', '3'], '3': ['2', '4'],
  '4': ['3', '5'], '5': ['4', '6'], '6': ['5', '7'], '7': ['6', '8'],
  '8': ['7', '9'], '9': ['8', '0'],
}

function adjacentKey(char: string): string {
  const opts = ADJACENT[char.toLowerCase()]
  if (!opts?.length) return char
  return opts[Math.floor(Math.random() * opts.length)]
}

// ─── Delay per character type ─────────────────────────────────────────────
function charDelay(char: string): number {
  if (char === ' ')                           return 60  + Math.random() * 80
  if ('.!?'.includes(char))                   return 180 + Math.random() * 140
  if (',:;'.includes(char))                   return 120 + Math.random() * 80
  if ('—-–'.includes(char))                   return 90  + Math.random() * 60
  return 38 + Math.random() * 72
}

// ─── Props ────────────────────────────────────────────────────────────────
export interface TypeItOutProps {
  text: string
  className?: string
  /** Initial pause before typing starts (ms) */
  delay?: number
  /** 0–1 probability of a typo per alphanumeric char (default 0.035) */
  typoRate?: number
  /**
   * When provided, typing is triggered by this boolean (true = start).
   * When omitted, typing triggers automatically on scroll into view.
   */
  trigger?: boolean
  /** Fired once typing (and final caret pause) completes */
  onComplete?: () => void
}

export function TypeItOut({
  text,
  className,
  delay = 0,
  typoRate = 0.035,
  trigger,
  onComplete,
}: TypeItOutProps) {
  const [displayed, setDisplayed]   = useState('')
  const [showCaret, setShowCaret]   = useState(false)
  const ref                          = useRef<HTMLSpanElement>(null)
  const startedRef                   = useRef(false)
  const timersRef                    = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const scheduleTimeout = useCallback(
    (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timersRef.current.push(id)
    },
    []
  )

  const start = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true

    // ── Reduced-motion shortcut ────────────────────────────────
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayed(text)
      onComplete?.()
      return
    }

    setShowCaret(true)
    let current = ''
    let idx     = 0

    function typeNext() {
      if (idx >= text.length) {
        // Leave caret briefly, then hide and fire callback
        scheduleTimeout(() => {
          setShowCaret(false)
          onComplete?.()
        }, 420)
        return
      }

      const ch          = text[idx]
      const isTypeable  = /[a-zA-Z0-9]/.test(ch)
      const makeTypo    = isTypeable && Math.random() < typoRate

      if (makeTypo) {
        // 1. Type wrong key
        const wrong = adjacentKey(ch)
        current += wrong
        setDisplayed(current)

        scheduleTimeout(() => {
          // 2. Backspace
          current = current.slice(0, -1)
          setDisplayed(current)

          scheduleTimeout(() => {
            // 3. Type correct key
            current += ch
            setDisplayed(current)
            idx++
            scheduleTimeout(typeNext, charDelay(text[idx] ?? ''))
          }, 55 + Math.random() * 45)
        }, 135 + Math.random() * 110)
      } else {
        current += ch
        setDisplayed(current)
        idx++
        scheduleTimeout(typeNext, charDelay(text[idx] ?? ''))
      }
    }

    scheduleTimeout(typeNext, delay)
  }, [text, delay, typoRate, onComplete, scheduleTimeout])

  // ── Controlled mode (trigger prop) ────────────────────────────
  useEffect(() => {
    if (trigger === undefined) return
    if (trigger) start()
    return clearTimers
  }, [trigger, start, clearTimers])

  // ── Uncontrolled mode (IntersectionObserver) ──────────────────
  useEffect(() => {
    if (trigger !== undefined) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect()
          start()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [trigger, start, clearTimers])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {showCaret && (
        <span className="typing-caret" aria-hidden="true" />
      )}
    </span>
  )
}
