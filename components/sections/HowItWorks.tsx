'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const STEPS = [
  {
    num: '01',
    title: 'Talk to didii',
    body: 'Type, speak, or snap. Any Nigerian language. No forms, no menus.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    hint: 'send 20k to mama',
  },
  {
    num: '02',
    title: 'Confirm with one word',
    body: 'didii shows exactly who, how much, which account. You say yes — money moves.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    hint: 'Send ₦20,000 to Mama — GTBank 0123456789. I do am?',
  },
  {
    num: '03',
    title: 'didii shows up early',
    body: 'It watches bills, spots patterns, catches failures before they cost you.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    hint: '🔔 Two bills due tomorrow. ₦13,500. Handle both?',
  },
]

function StepCard({ step, i, active, onHover }: {
  step: typeof STEPS[0]
  i: number
  active: boolean
  onHover: () => void
}) {
  return (
    <StaggerReveal delay={i * 0.1}>
      <div
        className={`flex gap-5 p-5 rounded-modal cursor-default transition-colors duration-200 ${active ? 'bg-white/5' : 'hover:bg-white/3'}`}
        onMouseEnter={onHover}
      >
        <div className="flex-shrink-0">
          <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-colors duration-200 ${active ? 'bg-yellow-500/15 border-yellow-500/30' : 'bg-white/5 border-white/10'}`}>
            {step.icon}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-terracotta text-xs font-bold font-display tracking-wider">{step.num}</span>
            <h3 className="text-cream font-semibold text-base">{step.title}</h3>
          </div>
          <p className="text-muted text-sm leading-relaxed">{step.body}</p>

          {/* Hint chip */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-xs px-3 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-medium italic">
                  &ldquo;{step.hint}&rdquo;
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </StaggerReveal>
  )
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-16 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
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
          <div className="flex flex-col gap-2">
            {STEPS.map((step, i) => (
              <StepCard
                key={step.num}
                step={step}
                i={i}
                active={activeStep === i}
                onHover={() => setActiveStep(i)}
              />
            ))}
          </div>

          {/* Chat demo */}
          <StaggerReveal delay={0.25} direction="right">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl scale-75 pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, rgba(255,184,0,0.2) 0%, transparent 70%)' }} />
              <div className="relative glass rounded-modal p-6 max-w-[380px] mx-auto">
                <p className="text-muted text-xs font-medium mb-5 uppercase tracking-widest">Live preview</p>

                <div className="flex flex-col gap-3">
                  {/* User bubble */}
                  <div className="flex justify-end">
                    <div className="bg-yellow-500/20 border border-yellow-500/30 text-cream text-sm rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%]">
                      {STEPS[activeStep].hint.startsWith('🔔')
                        ? 'renew DSTV and GOtv together'
                        : STEPS[activeStep].hint.startsWith('Send')
                        ? 'send 20k to mama'
                        : 'renew DSTV and GOtv'}
                    </div>
                  </div>

                  {/* didii reply */}
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-yellow-dark text-[9px] font-bold font-display flex-shrink-0">d</div>
                    <div className="glass rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-cream max-w-[85%] leading-snug">
                      {activeStep === 0 && 'Send ₦20,000 to Mama — GTBank 0123456789. I do am?'}
                      {activeStep === 1 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted">DSTV Compact</span>
                            <span className="font-semibold">₦13,500</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted">GOtv Supa</span>
                            <span className="font-semibold">₦6,100</span>
                          </div>
                          <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                            <span className="font-medium">Total</span>
                            <span className="font-bold">₦19,600</span>
                          </div>
                          <button className="w-full bg-yellow-500 text-yellow-dark text-xs font-bold py-2 rounded-pill">
                            Oya, do both
                          </button>
                        </div>
                      )}
                      {activeStep === 2 && '🔔 Two bills due tomorrow. ₦13,500. Handle both?'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
