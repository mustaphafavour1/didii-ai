'use client'

import { motion } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const LEFT_BANKS = [
  { name: 'Opay',       bg: '#00C853', text: '#fff' },
  { name: 'GTBank',     bg: '#E4003C', text: '#fff' },
  { name: 'Kuda',       bg: '#400090', text: '#fff' },
  { name: 'First Bank', bg: '#003366', text: '#fff' },
  { name: 'Access',     bg: '#002244', text: '#fff' },
  { name: 'UBA',        bg: '#B11116', text: '#fff' },
]

const RIGHT_BANKS = [
  { name: 'Zenith',   bg: '#D01C1F', text: '#fff' },
  { name: 'Palmpay',  bg: '#06BA8C', text: '#fff' },
  { name: 'Fidelity', bg: '#00563B', text: '#fff' },
  { name: 'Wema',     bg: '#672E8E', text: '#fff' },
  { name: 'Sterling', bg: '#ED1C24', text: '#fff' },
  { name: 'Polaris',  bg: '#E31E24', text: '#fff' },
]

function BankChip({ name, bg, text, delay }: { name: string; bg: string; text: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-xs font-bold"
      style={{ backgroundColor: bg, color: text }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35, delay }}
    >
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black border-2 border-white/20"
        style={{ backgroundColor: text === '#fff' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)' }}
      >
        {name[0]}
      </span>
      {name}
    </motion.div>
  )
}

export function NoSwitching() {
  return (
    <section className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Title — centered */}
        <StaggerReveal className="mb-14 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            NO SWITCHING REQUIRED
          </p>
          <h2
            className="font-display font-black text-cream leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            <FunHeadline as="span">Nahh. Not another switch...</FunHeadline>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Keep your Opay, keep your GTBank. Keep everything.
          </p>
          <p className="text-muted/50 text-sm mt-2 italic">
            didii works on top of all your existing accounts.
          </p>
        </StaggerReveal>

        {/* 3-column layout: left banks | didii center | right banks */}
        <div className="grid grid-cols-3 gap-4 items-center max-w-3xl mx-auto">

          {/* Left banks */}
          <div className="flex flex-col gap-2.5 items-end">
            {LEFT_BANKS.map((bank, i) => (
              <div key={bank.name} className="flex items-center gap-2 w-full justify-end">
                <BankChip {...bank} delay={0.1 + i * 0.06} />
                {/* Animated connector line */}
                <motion.div
                  className="h-px flex-1 max-w-[32px]"
                  style={{ background: 'linear-gradient(to right, rgba(255,184,0,0.08), rgba(255,184,0,0.25))' }}
                  initial={{ scaleX: 0, originX: 1 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                />
              </div>
            ))}
          </div>

          {/* Center — didii chip */}
          <div className="flex justify-center items-center">
            <motion.div
              className="relative flex flex-col items-center gap-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                style={{ background: 'rgba(255,184,0,0.25)', transform: 'scale(1.5)' }}
              />
              <div
                className="relative w-16 h-16 rounded-full bg-yellow-500 border-4 flex items-center justify-center"
                style={{
                  borderColor: '#0F1108',
                  boxShadow: '0 0 40px rgba(255,184,0,0.5), 0 0 0 8px rgba(255,184,0,0.08)',
                }}
              >
                <span className="font-display font-black text-yellow-dark text-2xl">d</span>
              </div>
              <span className="text-yellow-500 text-xs font-bold font-display">didii</span>
            </motion.div>
          </div>

          {/* Right banks */}
          <div className="flex flex-col gap-2.5 items-start">
            {RIGHT_BANKS.map((bank, i) => (
              <div key={bank.name} className="flex items-center gap-2 w-full">
                {/* Animated connector line */}
                <motion.div
                  className="h-px flex-1 max-w-[32px]"
                  style={{ background: 'linear-gradient(to left, rgba(255,184,0,0.08), rgba(255,184,0,0.25))' }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                />
                <BankChip {...bank} delay={0.1 + i * 0.06} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom chips */}
        <StaggerReveal delay={0.5} className="mt-14 flex flex-wrap gap-2 justify-center">
          {['All Nigerian banks', 'All fintechs', 'All wallets'].map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1.5 rounded-pill border border-yellow-500/25 bg-yellow-500/8 text-yellow-500"
            >
              {item}
            </span>
          ))}
          <span className="text-xs px-3 py-1.5 rounded-pill border border-white/10 text-muted italic">
            and more coming
          </span>
        </StaggerReveal>
      </div>
    </section>
  )
}
