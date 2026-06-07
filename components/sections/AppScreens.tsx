'use client'

import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const SCREENS = [
  { src: '/app/screen-1.png', caption: 'Home chat',      sub: 'Everything in one conversation' },
  { src: '/app/screen-2.png', caption: 'Fund wallet',    sub: 'Bank transfer or card' },
  { src: '/app/screen-3.png', caption: 'Split & save',   sub: 'Money with your circle' },
  { src: '/app/screen-4.png', caption: 'Pay in 3 steps', sub: 'Talk → confirm → done' },
  { src: '/app/screen-5.png', caption: 'Spending view',  sub: 'Where your money goes' },
]

// Star-pattern positions for 5 list items
// Each placed at a tip of a 5-pointed star centered in the container
const STAR_POSITIONS: CSSProperties[] = [
  { top: '2%',  left: '50%',  transform: 'translate(-50%, 0)' },          // 12 o'clock
  { top: '36%', left: '96%',  transform: 'translate(-100%, -50%)' },       // 2 o'clock
  { top: '88%', left: '80%',  transform: 'translate(-50%, -100%)' },       // 4 o'clock
  { top: '88%', left: '20%',  transform: 'translate(-50%, -100%)' },       // 8 o'clock
  { top: '36%', left: '4%',   transform: 'translate(0, -50%)' },           // 10 o'clock
]

export function AppScreens() {
  const [center, setCenter] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCenter((prev) => (prev + 1) % SCREENS.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="app-screens" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-16 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            INSIDE DIDII
          </p>
          <h2
            className="font-display font-black text-cream leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
          >
            <FunHeadline as="span">Have a taste of Didii</FunHeadline>
          </h2>
          <p className="text-muted text-sm italic">it&apos;s so sweet, we couldn&apos;t keep it to ourselves</p>
        </StaggerReveal>

        {/* Two-col: phone carousel (left) + star list (right) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: phone carousel with Y-rotation effect */}
          <StaggerReveal delay={0.1}>
            <div className="flex flex-col items-center gap-6">

              {/* Glow */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute pointer-events-none blur-3xl"
                  style={{
                    width: 220,
                    height: 220,
                    background: 'radial-gradient(ellipse, rgba(255,184,0,0.22) 0%, transparent 70%)',
                  }}
                />

                {/* Phone with Y-rotation entrance */}
                <div style={{ perspective: '900px' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={center}
                      initial={{ rotateY: 28, x: 70, opacity: 0, scale: 0.88 }}
                      animate={{ rotateY: 0, x: 0, opacity: 1, scale: 1 }}
                      exit={{ rotateY: -20, x: -50, opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ transformOrigin: 'center center' }}
                    >
                      <div
                        className="relative rounded-[30px] border border-white/12 overflow-hidden"
                        style={{
                          width: 'clamp(150px, 18vw, 200px)',
                          aspectRatio: '9/19.5',
                          boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 80px rgba(255,184,0,0.18)',
                        }}
                      >
                        <Image
                          src={SCREENS[center].src}
                          alt={SCREENS[center].caption}
                          fill
                          className="object-cover"
                          sizes="200px"
                          priority
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Caption below phone */}
              <div className="text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`cap-${center}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.22 }}
                    className="text-cream text-sm font-semibold"
                  >
                    {SCREENS[center].caption}
                  </motion.p>
                </AnimatePresence>
                <p className="text-muted text-xs mt-1">{SCREENS[center].sub}</p>
              </div>

              {/* Progress dots */}
              <div className="flex gap-1.5">
                {SCREENS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCenter(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === center ? 'w-6 bg-yellow-500' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to screen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </StaggerReveal>

          {/* Right: star-scattered screen labels */}
          <StaggerReveal delay={0.2} direction="right">
            <div className="relative h-[300px] sm:h-[340px] overflow-hidden">
              {SCREENS.map((screen, i) => (
                <button
                  key={screen.src}
                  onClick={() => setCenter(i)}
                  className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-250 ${
                    center === i
                      ? 'bg-yellow-500/12 ring-1 ring-yellow-500/30'
                      : 'hover:bg-white/4'
                  }`}
                  style={STAR_POSITIONS[i]}
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200 ${
                    center === i ? 'bg-yellow-500' : 'bg-white/20'
                  }`} />
                  <div className="text-left">
                    <p className={`text-sm font-semibold leading-tight whitespace-nowrap transition-colors duration-200 ${
                      center === i ? 'text-cream' : 'text-muted'
                    }`}>
                      {screen.caption}
                    </p>
                    {center === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-muted/60 mt-0.5 whitespace-nowrap"
                      >
                        {screen.sub}
                      </motion.p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Social proof below star */}
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['bg-yellow-500', 'bg-terracotta', 'bg-muted'].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${bg} border-2 border-ink flex items-center justify-center text-[8px] font-bold text-ink`}
                  >
                    {['T', 'A', 'K'][i]}
                  </div>
                ))}
              </div>
              <p className="text-muted text-xs">
                2,859 Nigerians waiting ·{' '}
                <span className="text-yellow-500 font-medium">Join them</span>
              </p>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
