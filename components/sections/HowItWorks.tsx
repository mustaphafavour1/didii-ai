'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { TypeItOut } from '@/components/TypeItOut'

const STEPS = [
  {
    num: '01',
    title: 'Talk to didii',
    body: 'Type, speak, or snap a photo. Any Nigerian language — Pidgin, Yoruba, Hausa, Igbo, English. No form, no menus, no app navigation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Confirm with one word',
    body: 'didii shows you exactly who, how much, and which account. Money no dey move until you say yes. You stay in control.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'didii shows up before you ask',
    body: 'It watches your bills, notices patterns, catches failures before they cost you. "Two bills due tomorrow. ₦13,500. Handle both?"',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

// ── Inline pay demo ──────────────────────────────────────────────────────
function PayDemo() {
  const [phase, setPhase] = useState<'waiting'|'typing'|'confirm'|'done'>('waiting')

  return (
    <div className="glass rounded-modal p-6 max-w-[380px] mx-auto">
      <p className="text-muted text-xs font-medium mb-4 uppercase tracking-widest">Live demo</p>

      <div className="flex flex-col gap-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-indigo text-white text-sm rounded-2xl rounded-br-sm px-4 py-2.5">
            {phase === 'waiting' ? (
              <button
                onClick={() => setPhase('typing')}
                className="text-white/70 italic hover:text-white transition-colors text-sm"
              >
                click to try →
              </button>
            ) : (
              <TypeItOut
                text="pay DSTV and sort my Airtel data"
                trigger={true}
                onComplete={() => setTimeout(() => setPhase('confirm'), 400)}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {(phase === 'confirm' || phase === 'done') && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl rounded-bl-sm p-4"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">DSTV Compact</span>
                    <span className="text-cream font-semibold">₦13,500</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Airtel 10GB data</span>
                    <span className="text-cream font-semibold">₦3,000</span>
                  </div>
                  <div className="border-t border-white/10 pt-1.5 flex items-center justify-between text-sm">
                    <span className="text-cream font-medium">Total</span>
                    <span className="text-cream font-bold">₦16,500</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {phase !== 'done' ? (
                    <>
                      <button
                        onClick={() => setPhase('done')}
                        className="flex-1 bg-indigo text-white text-xs font-semibold py-2 rounded-pill hover:bg-indigo-600 active:scale-95 transition-all"
                      >
                        Oya, do both
                      </button>
                      <button
                        onClick={() => setPhase('waiting')}
                        className="px-3 py-2 rounded-pill border border-white/10 text-muted text-xs hover:bg-white/5 transition-colors"
                      >
                        Nah
                      </button>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2"
                    >
                      <span className="text-lilac text-sm">✓ E don set.</span>
                      <button
                        onClick={() => { setPhase('waiting') }}
                        className="text-muted text-xs hover:text-cream ml-2"
                      >
                        Try again
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-16 text-center">
          <p className="text-indigo text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            HOW IT WORKS
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-cream leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Talk. Confirm. Done.
          </FunHeadline>
        </StaggerReveal>

        {/* Steps + demo side-by-side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Steps */}
          <div className="flex flex-col gap-10">
            {STEPS.map((step, i) => (
              <StaggerReveal key={step.num} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-2xl bg-indigo/15 border border-indigo/25 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-terracotta text-xs font-bold font-display tracking-wider">{step.num}</span>
                      <h3 className="text-cream font-semibold text-base">{step.title}</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </StaggerReveal>
            ))}
          </div>

          {/* Interactive demo */}
          <StaggerReveal delay={0.25} direction="right">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl scale-75"
                   style={{ background: 'radial-gradient(ellipse, rgba(75,61,245,0.3) 0%, transparent 70%)' }} />
              <div className="relative">
                <PayDemo />
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
