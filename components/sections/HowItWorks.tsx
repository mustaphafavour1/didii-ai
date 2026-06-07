'use client'

import { useState } from 'react'
import Image from 'next/image'
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
    img: '/app/how-1.png',
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
    img: '/app/how-2.png',
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
    img: '/app/how-3.png',
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
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
          >
            Talk. Confirm. Done.
          </FunHeadline>
        </StaggerReveal>

        {/* Steps + image side-by-side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Steps */}
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

          {/* Right: Step image */}
          <StaggerReveal delay={0.25} direction="right">
            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl scale-75 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(255,184,0,0.2) 0%, transparent 70%)' }}
              />
              <div
                className="relative rounded-modal overflow-hidden mx-auto bg-ink/20"
                style={{
                  maxWidth: '320px',
                  boxShadow: '0 4px 24px rgba(15,17,8,0.3), 0 24px 80px rgba(15,17,8,0.4)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.32 }}
                  >
                    <Image
                      src={STEPS[activeStep].img}
                      alt={STEPS[activeStep].title}
                      width={320}
                      height={560}
                      className="object-cover w-full h-auto"
                      sizes="320px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
