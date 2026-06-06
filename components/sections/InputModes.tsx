'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { TypeItOut } from '@/components/TypeItOut'

const MODES = [
  {
    id: 'voice',
    label: 'Talk am',
    sub: 'Voice input',
    sample: '"Abeg send 5k to Chidi"',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 15a8 8 0 0 0 16 0M14 23v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    demo: (
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-yellow-500/15 border-2 border-yellow-500/40 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full animate-ping bg-yellow-500/10" style={{ animationDuration: '1.5s' }} />
          <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-yellow-500">
            <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M6 15a8 8 0 0 0 16 0M14 23v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
        {/* sound wave bars */}
        <div className="flex items-end gap-1 h-10" aria-hidden="true">
          {[3, 6, 10, 14, 10, 6, 3, 6, 10, 14, 10, 6, 3].map((h, i) => (
            <div
              key={i}
              className="wave-bar active bg-yellow-500/70 w-1.5 rounded-sm"
              style={{ height: `${h}px`, animationDelay: `${i * 0.07}s` }}
            />
          ))}
        </div>
        <p className="text-cream/50 text-sm italic">Listening...</p>
      </div>
    ),
  },
  {
    id: 'snap',
    label: 'Snap am',
    sub: 'Photo input',
    sample: '[Photo of invoice] → "Pay ₦45,000 to Oluwaseun?"',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
        <path d="M10 6l1.5-3h5L18 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    demo: (
      <div className="flex flex-col items-center gap-5">
        {/* simulated photo with scan line */}
        <div className="relative w-52 h-36 rounded-xl overflow-hidden bg-ink/40 border border-white/10">
          {/* fake invoice content */}
          <div className="p-4 flex flex-col gap-2">
            <div className="h-3 w-28 bg-white/20 rounded" />
            <div className="h-2 w-36 bg-white/10 rounded" />
            <div className="h-2 w-24 bg-white/10 rounded" />
            <div className="mt-2 h-4 w-20 bg-yellow-500/40 rounded" />
          </div>
          {/* scan line */}
          <div className="scan-line-anim absolute inset-x-0 h-0.5 bg-yellow-500/70 blur-[1px]" style={{ top: '4%' }} />
        </div>
        <div className="text-xs text-yellow-500 font-medium">Reading document...</div>
        <div className="text-center px-4 py-2.5 rounded-xl glass text-sm text-cream">
          Pay ₦45,000 to Oluwaseun?
        </div>
      </div>
    ),
  },
  {
    id: 'type',
    label: 'Type am',
    sub: 'Text input',
    sample: '"pay my DSTV and sort my Airtel data"',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 10h12M8 14h8M8 18h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    demo: (
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex items-center gap-2 px-4 py-3 rounded-pill bg-white/8 border border-white/12">
          <span className="flex-1 text-sm text-cream/80">
            <TypeItOut text="pay my DSTV and sort Airtel 10GB" trigger delay={300} />
          </span>
          <button className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0" aria-label="Send">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="#1A1200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex justify-end">
          <div className="bg-yellow-500/20 border border-yellow-500/25 text-cream text-xs rounded-2xl rounded-br-sm px-3.5 py-2">
            pay my DSTV and sort Airtel 10GB
          </div>
        </div>
        <div className="flex items-end gap-2">
          <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-yellow-dark text-[8px] font-bold font-display">d</div>
          <div className="glass rounded-2xl rounded-bl-sm px-3 py-2 text-xs text-cream leading-snug">
            DSTV ₦13,500 + Airtel 10GB ₦3,000 = ₦16,500. Do both?
          </div>
        </div>
      </div>
    ),
  },
]

export function InputModes() {
  const [active, setActive] = useState(0)

  // auto-cycle every 4s
  useEffect(() => {
    const id = setInterval(() => setActive(prev => (prev + 1) % MODES.length), 4000)
    return () => clearInterval(id)
  }, [])

  const mode = MODES[active]

  return (
    <section className="bg-ink py-24 sm:py-32 relative overflow-hidden">
      {/* Yellow bg tint */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,184,0,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header — centered */}
        <StaggerReveal className="mb-16 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            HOWEVER YOU PREFER
          </p>
          <h2
            className="font-display font-black text-cream leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            <FunHeadline as="span">Voice, type, or snap.</FunHeadline>
            <br />
            <span className="text-yellow-500 font-display font-black">didii gets it.</span>
          </h2>
        </StaggerReveal>

        {/* Mode tabs + demo */}
        <div className="flex flex-col items-center gap-10">

          {/* Mode selector tabs */}
          <div className="flex gap-2 p-1.5 rounded-pill bg-white/5 border border-white/8">
            {MODES.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-semibold transition-all duration-300 ${
                  active === i
                    ? 'bg-yellow-500 text-yellow-dark shadow-glow-yellow-sm'
                    : 'text-muted hover:text-cream'
                }`}
                aria-pressed={active === i}
              >
                <span className="hidden sm:block">{m.label}</span>
                <span className="sm:hidden">{m.sub}</span>
              </button>
            ))}
          </div>

          {/* Single animated demo panel */}
          <div className="w-full max-w-sm min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-modal p-8 w-full flex flex-col items-center"
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-yellow-500">{mode.icon}</span>
                  <div>
                    <p className="text-cream font-display font-bold text-lg leading-tight">{mode.label}</p>
                    <p className="text-muted text-xs">{mode.sub}</p>
                  </div>
                </div>
                {mode.demo}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sample phrase */}
          <AnimatePresence mode="wait">
            <motion.p
              key={mode.id + '-sample'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted text-sm italic text-center"
            >
              {mode.sample}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
