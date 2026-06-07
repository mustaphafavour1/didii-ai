'use client'

import { useEffect, useState } from 'react'

const EXAMPLES = [
  'send 20k to mama',
  'buy MTN 10GB for my line',
  'cash out 50 USDT to GTBank',
  'pay DSTV and GOtv together',
  'how much did I spend this month',
  'top up my EKEDC meter 5k',
  'send my babe 15k abeg',
]

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export function HeroInputCycler() {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(EXAMPLES[0])
      return
    }

    let alive = true
    ;(async () => {
      await sleep(800)
      let idx = 0
      while (alive) {
        const word = EXAMPLES[idx]
        for (let i = 1; i <= word.length; i++) {
          if (!alive) return
          setDisplay(word.slice(0, i))
          const ch = word[i - 1]
          await sleep(ch === ' ' ? 90 : 48 + Math.random() * 52)
        }
        await sleep(1800)
        for (let i = word.length - 1; i >= 0; i--) {
          if (!alive) return
          setDisplay(word.slice(0, i))
          await sleep(28 + Math.random() * 20)
        }
        await sleep(400)
        idx = (idx + 1) % EXAMPLES.length
      }
    })()
    return () => { alive = false }
  }, [])

  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-pill bg-ink/80 backdrop-blur-md border border-white/15 shadow-lg">
      <span className="flex-1 text-sm text-cream/85 font-body min-h-[1.25em]">
        {display || <span className="text-muted/70">Type am...</span>}
        <span className="typing-caret" aria-hidden />
      </span>
      <div className="flex gap-2 items-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted/70" aria-hidden="true">
          <rect x="1" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M5.5 4l1-2h3l1 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted/70" aria-hidden="true">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-5 0V3.5A2.5 2.5 0 0 1 8 1z" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M3 8a5 5 0 0 0 10 0M8 13v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <button className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0" aria-label="Send">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="#1A1200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
