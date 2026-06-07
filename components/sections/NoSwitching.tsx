'use client'

import { motion } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

// x, y as percentage of container (used for both CSS absolute positioning + SVG viewBox coords)
const ALL_BANKS = [
  // Left side — y values average to 50 so center of mass aligns with didii chip
  { name: 'OPay',       bg: '#00C853', text: '#fff', x: 7,  y: 8,  delay: 0.10 },
  { name: 'GTBank',     bg: '#E4003C', text: '#fff', x: 20, y: 20, delay: 0.20 },
  { name: 'Kuda',       bg: '#400090', text: '#fff', x: 5,  y: 40, delay: 0.15 },
  { name: 'First Bank', bg: '#003366', text: '#fff', x: 18, y: 60, delay: 0.25 },
  { name: 'Access',     bg: '#002244', text: '#fff', x: 8,  y: 78, delay: 0.18 },
  { name: 'UBA',        bg: '#B11116', text: '#fff', x: 22, y: 90, delay: 0.22 },
  // Right side — mirrored y values
  { name: 'Zenith',     bg: '#D01C1F', text: '#fff', x: 93, y: 8,  delay: 0.12 },
  { name: 'Palmpay',    bg: '#06BA8C', text: '#fff', x: 80, y: 20, delay: 0.21 },
  { name: 'Fidelity',   bg: '#00563B', text: '#fff', x: 95, y: 40, delay: 0.16 },
  { name: 'Wema',       bg: '#672E8E', text: '#fff', x: 82, y: 60, delay: 0.26 },
  { name: 'Sterling',   bg: '#ED1C24', text: '#fff', x: 92, y: 78, delay: 0.19 },
  { name: 'Polaris',    bg: '#E31E24', text: '#fff', x: 78, y: 90, delay: 0.23 },
]

// Build SVG cubic bezier path from bank to center (50, 50)
function buildPath(bank: { x: number; y: number }) {
  const cx = 50
  const cy = 50
  const midX = bank.x < 50
    ? bank.x + (cx - bank.x) * 0.55
    : bank.x - (bank.x - cx) * 0.55
  return `M ${bank.x},${bank.y} C ${midX},${bank.y} ${midX},${cy} ${cx},${cy}`
}

export function NoSwitching() {
  return (
    <section className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Title */}
        <StaggerReveal className="mb-14 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            NO SWITCHING REQUIRED
          </p>
          <h2
            className="font-display font-black text-cream leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}
          >
            <FunHeadline as="span">Nahh.</FunHeadline>
            <br />
            <FunHeadline as="span">Not another switch...</FunHeadline>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Keep your Opay, keep your GTBank. Keep everything.
          </p>
          <p className="text-muted/50 text-sm mt-2 italic">
            didii works on top of all your existing accounts.
          </p>
        </StaggerReveal>

        {/* Scattered chip layout with animated flow lines */}
        <div className="relative w-full overflow-hidden" style={{ height: 460 }}>

          {/* SVG layer — faint connector lines + animated dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Connector lines */}
            {ALL_BANKS.map((bank) => (
              <path
                key={`line-${bank.name}`}
                d={buildPath(bank)}
                stroke="rgba(255,184,0,0.1)"
                strokeWidth="0.3"
                fill="none"
              />
            ))}

            {/* Animated dots flowing from bank → center */}
            {ALL_BANKS.map((bank, i) => (
              <circle key={`dot-${bank.name}`} r="0.45" fill="rgba(255,184,0,0.55)">
                <animateMotion
                  dur={`${2.0 + (i % 4) * 0.35}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                  path={buildPath(bank)}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.7;0.7;0"
                  keyTimes="0;0.08;0.88;1"
                  dur={`${2.0 + (i % 4) * 0.35}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                />
              </circle>
            ))}
          </svg>

          {/* Bank chips — scattered using absolute % positions */}
          {ALL_BANKS.map((bank) => (
            <motion.div
              key={bank.name}
              className="absolute flex items-center gap-1 px-2.5 py-1 rounded-pill text-[10px] font-bold whitespace-nowrap"
              style={{
                left: `${bank.x}%`,
                top: `${bank.y}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: bank.bg,
                color: bank.text,
              }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: bank.delay }}
            >
              <span
                className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-black border border-white/25"
                style={{ backgroundColor: 'rgba(255,255,255,0.22)' }}
              >
                {bank.name[0]}
              </span>
              {bank.name}
            </motion.div>
          ))}

          {/* Center — didii pill chip (larger) */}
          <motion.div
            className="absolute"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.45, type: 'spring', stiffness: 180 }}
          >
            {/* Glow halo */}
            <div
              className="absolute inset-0 blur-2xl pointer-events-none rounded-full"
              style={{ background: 'rgba(255,184,0,0.4)', transform: 'scale(2.5)' }}
            />
            <div
              className="relative flex items-center gap-2 px-6 py-3 rounded-pill bg-yellow-500"
              style={{
                outline: '3px solid #0F1108',
                outlineOffset: '0px',
                boxShadow: '0 0 48px rgba(255,184,0,0.65), 0 0 0 6px rgba(255,184,0,0.12)',
              }}
            >
              <span className="font-display font-black text-yellow-dark text-2xl leading-none">d</span>
              <span className="font-display font-bold text-yellow-dark text-base">didii</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom chips */}
        <StaggerReveal delay={0.5} className="mt-8 flex flex-wrap gap-2 justify-center">
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
