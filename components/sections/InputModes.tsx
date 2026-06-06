'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { TypeItOut } from '@/components/TypeItOut'

type ModeId = 'voice' | 'type' | 'snap'

const TABS: { id: ModeId; label: string }[] = [
  { id: 'voice', label: 'Voice it' },
  { id: 'type',  label: 'Type it' },
  { id: 'snap',  label: 'Snap it' },
]

function VoiceDemo({ active }: { active: boolean }) {
  if (!active) {
    return (
      <div className="flex items-center justify-center h-full opacity-25">
        <svg width="40" height="40" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-cream">
          <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M6 15a8 8 0 0 0 16 0M14 23v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Pulsing mic */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full animate-ping bg-yellow-500/15" style={{ animationDuration: '1.5s' }} />
        <div className="absolute -inset-3 rounded-full border border-yellow-500/20" />
        <div className="w-20 h-20 rounded-full bg-yellow-500/12 border-2 border-yellow-500/40 flex items-center justify-center relative">
          <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-yellow-500">
            <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M6 15a8 8 0 0 0 16 0M14 23v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Sound wave bars */}
      <div className="flex items-end gap-1 h-10" aria-hidden="true">
        {[3, 6, 10, 14, 10, 18, 10, 14, 10, 6, 14, 8, 3].map((h, i) => (
          <div
            key={i}
            className="wave-bar active bg-yellow-500/70 w-1.5 rounded-sm"
            style={{ height: `${h}px`, animationDelay: `${i * 0.07}s` }}
          />
        ))}
      </div>

      {/* Transcribing text */}
      <div className="flex flex-col gap-1.5 items-center w-full max-w-xs">
        <p className="text-muted text-xs uppercase tracking-widest font-semibold">Transcribing...</p>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-cream/80 min-h-[48px]">
          <TypeItOut
            text="I wan send 10k to My babe and then recharge 2k to my MTN line"
            trigger={active}
            delay={300}
          />
        </div>
      </div>
    </div>
  )
}

function TypeDemo({ active }: { active: boolean }) {
  if (!active) {
    return (
      <div className="flex items-center justify-center h-full opacity-25">
        <svg width="40" height="40" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-cream">
          <rect x="3" y="5" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M8 10h12M8 14h8M8 18h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-4 w-full max-w-xs">
      {/* Input bar */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-pill bg-white/8 border border-white/12">
        <span className="flex-1 text-sm text-cream/80 min-h-[1.25em]">
          <TypeItOut text="pay my DSTV and sort Airtel 10GB" trigger={active} delay={200} />
        </span>
        <button className="w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0" aria-label="Send">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="#1A1200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* User bubble */}
      <div className="flex justify-end">
        <div className="bg-yellow-500/20 border border-yellow-500/25 text-cream text-xs rounded-2xl rounded-br-sm px-3.5 py-2">
          pay my DSTV and sort Airtel 10GB
        </div>
      </div>

      {/* didii reply */}
      <div className="flex items-end gap-2">
        <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-yellow-dark text-[8px] font-bold font-display flex-shrink-0">d</div>
        <div className="glass rounded-2xl rounded-bl-sm px-3 py-2 text-xs text-cream leading-snug">
          DSTV ₦13,500 + Airtel 10GB ₦3,000 = ₦16,500. Do both?
        </div>
      </div>
    </div>
  )
}

function SnapDemo({ active }: { active: boolean }) {
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    if (!active) { setScanned(false); return }
    const t = setTimeout(() => setScanned(true), 2200)
    return () => clearTimeout(t)
  }, [active])

  if (!active) {
    return (
      <div className="flex items-center justify-center h-full opacity-25">
        <svg width="40" height="40" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="text-cream">
          <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
          <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M10 6l1.5-3h5L18 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* Fake invoice card with scan line */}
      <div className="relative w-56 h-36 rounded-xl overflow-hidden border border-white/10 bg-ink/40">
        {/* Fake invoice content lines */}
        <div className="p-4 flex flex-col gap-2.5">
          <div className="h-3 w-28 bg-white/25 rounded" />
          <div className="h-2 w-40 bg-white/12 rounded" />
          <div className="h-2 w-32 bg-white/12 rounded" />
          <div className="flex items-center justify-between mt-1">
            <div className="h-3 w-16 bg-white/10 rounded" />
            <div className="h-3 w-20 bg-yellow-500/40 rounded" />
          </div>
        </div>

        {/* Scan line — only when active and not yet scanned */}
        {active && !scanned && (
          <div
            className="scan-line-anim absolute inset-x-0 h-0.5 bg-yellow-500/80"
            style={{ top: '4%', boxShadow: '0 0 8px rgba(255,184,0,0.6)' }}
          />
        )}

        {/* Scanned overlay */}
        {scanned && (
          <div className="absolute inset-0 bg-yellow-500/8 border border-yellow-500/25 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12l5 5L19 7" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>

      {!scanned ? (
        <p className="text-yellow-500 text-xs font-medium uppercase tracking-wider">Scanning document...</p>
      ) : (
        <AnimatePresence>
          <motion.div
            key="extracted"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 items-center"
          >
            <p className="text-yellow-500 text-xs font-medium uppercase tracking-wider">Extracted</p>
            <div className="glass rounded-xl px-4 py-2.5 text-sm text-cream text-center">
              Pay ₦45,000 to Vendor — confirm?
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export function InputModes() {
  const [active, setActive] = useState(0)

  // Auto-cycle every 4s
  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % TABS.length), 4000)
    return () => clearInterval(id)
  }, [])

  const activeId = TABS[active].id

  return (
    <section className="bg-ink py-24 sm:py-32 relative overflow-hidden">
      {/* Yellow tint glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,184,0,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header — centered */}
        <StaggerReveal className="mb-14 text-center">
          <h2
            className="font-display font-black text-cream leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            <FunHeadline as="span">Voice it, Type it or Snap it</FunHeadline>
          </h2>
          <p className="text-yellow-500 font-display font-bold text-lg sm:text-2xl">
            didii gets it. Always.
          </p>
        </StaggerReveal>

        {/* Mode tabs + demo */}
        <div className="flex flex-col items-center gap-10">

          {/* Tab selector */}
          <div className="flex gap-1.5 p-1.5 rounded-pill bg-white/5 border border-white/8">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActive(i)}
                className={`relative px-6 py-2.5 rounded-pill text-sm font-semibold transition-all duration-300 ${
                  active === i
                    ? 'bg-yellow-500 text-yellow-dark shadow-glow-yellow-sm'
                    : 'text-muted hover:text-cream'
                }`}
                aria-pressed={active === i}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Demo panel */}
          <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-modal p-8 w-full min-h-[280px] flex items-center justify-center"
              >
                {activeId === 'voice' && <VoiceDemo active={true} />}
                {activeId === 'type'  && <TypeDemo  active={true} />}
                {activeId === 'snap'  && <SnapDemo  active={true} />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sub-hint */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeId + '-hint'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted/60 text-xs italic text-center"
            >
              {activeId === 'voice' && 'Say it in Pidgin, Yoruba, Igbo, Hausa, or English'}
              {activeId === 'type'  && 'Type however you\'d talk to a person'}
              {activeId === 'snap'  && 'Snap an invoice, receipt, or bank details'}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
