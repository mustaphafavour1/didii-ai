'use client'

/**
 * HeroInputCycler — types different example queries in the hero input bar,
 * never sends, clears and moves to the next. Loops continuously.
 */
import { useCallback, useEffect, useRef, useState } from 'react'

const EXAMPLES = [
  'send 20k to mama',
  'buy MTN 10GB for my line',
  'cash out 50 USDT to GTBank',
  'pay DSTV and GOtv together',
  'how much did I spend this month',
  'top up my EKEDC meter 5k',
  'send my babe 15k abeg',
]

function useTypingCycle(examples: string[]) {
  const [text, setText]       = useState('')
  const [phase, setPhase]     = useState<'typing'|'pausing'|'clearing'>('typing')
  const [exIdx, setExIdx]     = useState(0)
  const timersRef             = useRef<ReturnType<typeof setTimeout>[]>([])

  const sched = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms)
    timersRef.current.push(id)
  }

  const clear = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(examples[0])
      return
    }

    const word = examples[exIdx]

    if (phase === 'typing') {
      let i = 0
      const type = () => {
        if (i >= word.length) { setPhase('pausing'); return }
        setText(word.slice(0, i + 1))
        i++
        const delay = word[i - 1] === ' ' ? 80 + Math.random() * 40 : 38 + Math.random() * 55
        sched(type, delay)
      }
      sched(type, 600)
    }

    if (phase === 'pausing') {
      sched(() => setPhase('clearing'), 1800)
    }

    if (phase === 'clearing') {
      let len = word.length
      const erase = () => {
        if (len <= 0) {
          setText('')
          setExIdx(prev => (prev + 1) % examples.length)
          sched(() => setPhase('typing'), 400)
          return
        }
        len--
        setText(word.slice(0, len))
        sched(erase, 28 + Math.random() * 22)
      }
      sched(erase, 200)
    }

    return clear
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, exIdx])

  return text
}

export function HeroInputCycler() {
  const text = useTypingCycle(EXAMPLES)

  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-pill bg-white/8 border border-white/10">
      <span className="flex-1 text-sm text-cream/80 font-body min-h-[1.25em]">
        {text || <span className="text-muted">Type am...</span>}
        <span className="typing-caret" aria-hidden />
      </span>
      <div className="flex gap-2 items-center flex-shrink-0">
        {/* camera icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted" aria-hidden>
          <rect x="1" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M5.5 4l1-2h3l1 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {/* mic icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted" aria-hidden>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-5 0V3.5A2.5 2.5 0 0 1 8 1z" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M3 8a5 5 0 0 0 10 0M8 13v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {/* send button */}
        <button className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0" aria-label="Send">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 6h8M6 2l4 4-4 4" stroke="#1A1200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
