'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const BANKS = [
  { name: 'Opay',       bg: '#00C853', text: '#fff', angle: 0 },
  { name: 'GTBank',     bg: '#E4003C', text: '#fff', angle: 30 },
  { name: 'Access',     bg: '#002244', text: '#fff', angle: 60 },
  { name: 'Kuda',       bg: '#400090', text: '#fff', angle: 90 },
  { name: 'First Bank', bg: '#003366', text: '#fff', angle: 120 },
  { name: 'UBA',        bg: '#B11116', text: '#fff', angle: 150 },
  { name: 'Zenith',     bg: '#D01C1F', text: '#fff', angle: 180 },
  { name: 'Palmpay',    bg: '#06BA8C', text: '#fff', angle: 210 },
  { name: 'Fidelity',   bg: '#00563B', text: '#fff', angle: 240 },
  { name: 'Wema',       bg: '#672E8E', text: '#fff', angle: 270 },
  { name: 'Sterling',   bg: '#ED1C24', text: '#fff', angle: 300 },
  { name: 'Polaris',    bg: '#E31E24', text: '#fff', angle: 330 },
]

function BankOrbit() {
  const R = 140  // orbit radius
  const CX = 180 // svg center x
  const CY = 180 // svg center y

  return (
    <div className="relative" style={{ width: 360, height: 360, maxWidth: '100%' }}>
      <svg
        viewBox="0 0 360 360"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Orbit ring */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,184,0,0.12)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Connecting lines */}
        {BANKS.map((bank, i) => {
          const rad = (bank.angle - 90) * (Math.PI / 180)
          const bx = CX + R * Math.cos(rad)
          const by = CY + R * Math.sin(rad)
          return (
            <motion.line
              key={bank.name}
              x1={bx} y1={by} x2={CX} y2={CY}
              stroke="rgba(255,184,0,0.25)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
            />
          )
        })}
      </svg>

      {/* Bank chips around orbit */}
      {BANKS.map((bank) => {
        const rad = (bank.angle - 90) * (Math.PI / 180)
        const pct = 50
        const bx = pct + (R / 180) * 50 * Math.cos(rad)
        const by = pct + (R / 180) * 50 * Math.sin(rad)
        return (
          <motion.div
            key={bank.name}
            className="absolute flex items-center justify-center rounded-full text-[10px] font-bold w-9 h-9 border-2 border-ink"
            style={{
              backgroundColor: bank.bg,
              color: bank.text,
              left: `${bx}%`,
              top: `${by}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + BANKS.indexOf(bank) * 0.06 }}
            title={bank.name}
          >
            {bank.name[0]}
          </motion.div>
        )
      })}

      {/* Center didii chip */}
      <motion.div
        className="absolute rounded-full bg-yellow-500 border-4 border-ink flex items-center justify-center"
        style={{
          width: 64,
          height: 64,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 40px rgba(255,184,0,0.4)',
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="font-display font-black text-yellow-dark text-xl">d</span>
      </motion.div>
    </div>
  )
}

export function NoSwitching() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: Copy */}
          <StaggerReveal>
            <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              NO SWITCHING REQUIRED
            </p>
            <h2
              className="font-display font-black text-cream leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)' }}
            >
              <FunHeadline as="span">Nahh. Not another</FunHeadline>
              <br />
              <FunHeadline as="span">switch...</FunHeadline>
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-md mb-6">
              didii works on top of the accounts you already have. Keep your Opay, keep your GTBank.
              Just connect and talk your money into existence.
            </p>
            <div className="flex flex-wrap gap-2">
              {['All Nigerian banks', 'All fintechs', 'All wallets'].map((item) => (
                <span key={item}
                      className="text-xs px-3 py-1.5 rounded-pill border border-yellow-500/25 bg-yellow-500/8 text-yellow-500">
                  {item}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 rounded-pill border border-white/10 text-muted italic">
                and more coming
              </span>
            </div>
          </StaggerReveal>

          {/* Right: Orbit diagram */}
          <StaggerReveal delay={0.15} direction="right" className="flex justify-center">
            <BankOrbit />
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
