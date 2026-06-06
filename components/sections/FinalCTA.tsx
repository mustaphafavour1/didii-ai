'use client'

import { useEffect, useRef, useState } from 'react'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { WaitlistForm } from '@/components/WaitlistForm'

const CHIPS = [
  'Free to join',
  'First access',
  'No spam — ever',
  'Early perks',
  'Join 2,859 waiting',
]

function ChipStrip() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let current = 0
    function fillNext() {
      setActiveIndex(current)
      current++
      if (current < CHIPS.length) {
        timerRef.current = setTimeout(fillNext, 550)
      }
    }
    const start = setTimeout(fillNext, 800)
    return () => {
      clearTimeout(start)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className="flex flex-wrap items-center justify-center gap-2" role="list">
      {CHIPS.map((chip, i) => (
        <span
          key={chip}
          role="listitem"
          className={`chip-animate text-xs px-4 py-1.5 rounded-pill border font-medium transition-colors duration-200 ${
            i <= activeIndex
              ? 'chip-active border-yellow-500 text-yellow-dark'
              : 'border-white/12 text-muted'
          }`}
        >
          {chip}
        </span>
      ))}
    </div>
  )
}

export function FinalCTA() {
  return (
    <section id="waitlist" className="bg-ink py-24 sm:py-32 relative overflow-hidden">
      {/* Aurora glows */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,184,0,0.1) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 inset-x-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,184,0,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">

        <StaggerReveal>
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            JOIN THE WAITLIST
          </p>
          <h2
            className="font-display font-black text-cream leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            <FunHeadline as="span">Smarter banking.</FunHeadline>
            <br />
            <FunHeadline as="span">Just by talking.</FunHeadline>
          </h2>
          <p className="text-muted text-base leading-relaxed mb-10">
            Be first when didii opens up. 60 seconds. No card, no wahala.
          </p>

          {/* Waitlist form */}
          <div className="mb-8 max-w-md mx-auto">
            <WaitlistForm dark />
          </div>

          {/* Sequential chip fill */}
          <ChipStrip />
        </StaggerReveal>
      </div>
    </section>
  )
}
