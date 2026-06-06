'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const SCREENS = [
  { src: '/app/screen-1.svg', caption: 'Home chat',    sub: 'Everything in one conversation' },
  { src: '/app/screen-2.svg', caption: 'Fund wallet',  sub: 'Bank transfer or card' },
  { src: '/app/screen-3.svg', caption: 'Split & save', sub: 'Money with your circle' },
  { src: '/app/screen-4.svg', caption: 'Pay in 3 steps', sub: 'Talk → confirm → done' },
  { src: '/app/screen-5.svg', caption: 'Spending view', sub: 'Where your money goes' },
]

function PhoneFrame({ src, caption, scale, opacity, zIndex, gradient }: {
  src: string
  caption: string
  scale: number
  opacity: number
  zIndex: number
  gradient?: string
}) {
  return (
    <motion.div
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale, opacity }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex-shrink-0"
      style={{ zIndex }}
    >
      <div
        className="relative rounded-[28px] border border-white/10 overflow-hidden"
        style={{
          width: 150,
          aspectRatio: '9/19.5',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(255,184,0,0.08)',
        }}
      >
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
          sizes="150px"
        />
        {/* Edge gradient overlay */}
        {gradient && (
          <div className="absolute inset-0 pointer-events-none" style={{ background: gradient }} />
        )}
      </div>
    </motion.div>
  )
}

export function AppScreens() {
  const [center, setCenter] = useState(0)

  // Auto-advance every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setCenter((prev) => (prev + 1) % SCREENS.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const prev = (center - 1 + SCREENS.length) % SCREENS.length
  const next = (center + 1) % SCREENS.length

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
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <FunHeadline as="span">Have a taste of Didii</FunHeadline>
          </h2>
          <p className="text-muted text-sm italic">it&apos;s so sweet, we couldn&apos;t keep it to ourselves</p>
        </StaggerReveal>

        {/* Two-col: LEFT = carousel, RIGHT = list */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Carousel */}
          <StaggerReveal delay={0.1}>
            <div className="relative flex items-center justify-center" style={{ height: 340 }}>
              {/* Glow behind center phone */}
              <div
                className="absolute pointer-events-none blur-3xl"
                style={{
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(ellipse, rgba(255,184,0,0.25) 0%, transparent 70%)',
                }}
              />

              {/* Left phone — scaled down, faded, gradient right edge */}
              <div
                className="absolute"
                style={{ left: '50%', transform: 'translateX(-190px) translateY(10px)' }}
              >
                <AnimatePresence mode="popLayout">
                  <PhoneFrame
                    key={prev}
                    src={SCREENS[prev].src}
                    caption={SCREENS[prev].caption}
                    scale={0.65}
                    opacity={0.4}
                    zIndex={1}
                    gradient="linear-gradient(to right, #0F1108 0%, transparent 60%)"
                  />
                </AnimatePresence>
              </div>

              {/* Center phone — full size, full opacity */}
              <div className="relative" style={{ zIndex: 3 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={center}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="relative rounded-[28px] border border-white/12 overflow-hidden"
                      style={{
                        width: 160,
                        aspectRatio: '9/19.5',
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 80px rgba(255,184,0,0.15)',
                      }}
                    >
                      <Image
                        src={SCREENS[center].src}
                        alt={SCREENS[center].caption}
                        fill
                        className="object-cover"
                        sizes="160px"
                        priority
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right phone — scaled down, faded, gradient left edge */}
              <div
                className="absolute"
                style={{ left: '50%', transform: 'translateX(60px) translateY(10px)' }}
              >
                <AnimatePresence mode="popLayout">
                  <PhoneFrame
                    key={next}
                    src={SCREENS[next].src}
                    caption={SCREENS[next].caption}
                    scale={0.65}
                    opacity={0.4}
                    zIndex={1}
                    gradient="linear-gradient(to left, #0F1108 0%, transparent 60%)"
                  />
                </AnimatePresence>
              </div>
            </div>
          </StaggerReveal>

          {/* Right: screen list */}
          <StaggerReveal delay={0.2} direction="right">
            <div className="flex flex-col gap-1">
              <h3 className="text-cream font-display font-bold text-xl mb-2">Have a taste of Didii</h3>
              <p className="text-muted text-sm mb-6">it&apos;s so sweet, we couldn&apos;t keep it to ourselves</p>

              {SCREENS.map((screen, i) => (
                <button
                  key={screen.src}
                  onClick={() => setCenter(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    center === i ? 'bg-white/5' : 'hover:bg-white/3'
                  }`}
                >
                  {/* Dot */}
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200 ${
                    center === i ? 'bg-yellow-500' : 'bg-white/15'
                  }`} />
                  <div>
                    <p className={`text-sm font-semibold leading-tight transition-colors duration-200 ${
                      center === i ? 'text-cream' : 'text-muted'
                    }`}>
                      {screen.caption}
                    </p>
                    {center === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-muted/60 mt-0.5"
                      >
                        {screen.sub}
                      </motion.p>
                    )}
                  </div>
                </button>
              ))}

              {/* Waitlist social proof */}
              <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['bg-yellow-500', 'bg-terracotta', 'bg-lilac'].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full ${bg} border-2 border-ink flex items-center justify-center text-[8px] font-bold text-yellow-dark`}
                    >
                      {['T', 'A', 'K'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-muted text-xs">2,859 Nigerians waiting · <span className="text-yellow-500 font-medium">Join them</span></p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
