'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const SCENARIOS = [
  {
    emoji: '👨‍👩‍👦',
    title: 'Send money home',
    tag: 'Family',
    before: 'Searching contacts, opening banking app, finding account number, entering amount, checking PIN...',
    userMsg: 'abeg send 30k to iya for first bank',
    didiiReply: 'Send ₦30,000 to Iya — First Bank 3012345678. I do am?',
    toast: '✓ Sent to Iya · ₦30,000',
  },
  {
    emoji: '⚡',
    title: 'Pay light bill',
    tag: 'Bills',
    before: 'Hunting for meter token number, USSD not working, searching the EEDC website...',
    userMsg: 'top up my EKEDC meter with 5k',
    didiiReply: 'Recharge EKEDC meter 04123456789 — ₦5,000. Oya?',
    toast: '✓ Meter topped · ₦5,000',
  },
  {
    emoji: '📷',
    title: 'Pay from photo',
    tag: 'Snap to pay',
    before: "Switching apps, retyping account numbers by hand, praying you don't make an error...",
    userMsg: '[Photo of bank details]',
    didiiReply: 'GTBank · Olu Adeyemi · 0123456789. Pay ₦8,500?',
    toast: '✓ Paid · ₦8,500',
  },
  {
    emoji: '📱',
    title: 'Data & airtime',
    tag: 'Data',
    before: 'USSD code, app navigation, selecting network, picking bundle, entering number...',
    userMsg: 'MTN 10gb data for 08034567890',
    didiiReply: 'Top up MTN 10GB for 080····7890 — ₦3,000. I do am?',
    toast: '✓ 10GB sent on MTN',
  },
  {
    emoji: '₿',
    title: 'Cash out crypto',
    tag: 'Crypto',
    before: 'P2P marketplace, trust scores, exchange rates, escrow, waiting for release...',
    userMsg: 'cash out 50 USDT to my GTBank',
    didiiReply: '50 USDT → ₦79,500 at ₦1,590. GTBank 0123456789. Sharp sharp?',
    toast: '✓ ₦79,500 in your GTBank',
  },
  {
    emoji: '📺',
    title: 'Renew subs',
    tag: 'Entertainment',
    before: 'Forgetting decoder number, missed deadline, going a week without TV...',
    userMsg: 'renew DSTV and GOtv at once',
    didiiReply: 'DSTV ₦13,500 + GOtv ₦6,100 = ₦19,600 total. I do am?',
    toast: '✓ Both renewed. Enjoy!',
  },
]

export function Scenarios() {
  const [active, setActive] = useState(0)

  // Auto-iterate every 2.5s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SCENARIOS.length)
    }, 2500)
    return () => clearInterval(id)
  }, [])

  const s = SCENARIOS[active]

  return (
    <section id="scenarios" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-12 text-center">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            REAL LIFE
          </p>
          <h2
            className="font-display font-black text-ink leading-tight tracking-tight mx-auto"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
          >
            <FunHeadline as="span">Every money moment, covered.</FunHeadline>
          </h2>
        </StaggerReveal>

        {/* 6 horizontal blocks — sharp edges, touching */}
        <StaggerReveal delay={0.1}>
          <div className="flex w-full border border-ink/12 overflow-hidden">
            {SCENARIOS.map((scenario, i) => (
              <button
                key={scenario.title}
                onClick={() => setActive(i)}
                className={`flex-1 flex flex-col items-center gap-2 py-5 px-2 text-center border-r border-ink/12 last:border-r-0 transition-colors duration-300 cursor-pointer ${
                  active === i
                    ? 'bg-ink'
                    : 'bg-transparent hover:bg-ink/5'
                }`}
              >
                <span className="text-xl leading-none">{scenario.emoji}</span>
                <span className={`text-[11px] font-semibold leading-tight ${
                  active === i ? 'text-cream' : 'text-ink'
                }`}>
                  {scenario.title}
                </span>
                <span className={`text-[9px] uppercase tracking-wider ${
                  active === i ? 'text-yellow-500' : 'text-ink/35'
                }`}>
                  {scenario.tag}
                </span>
              </button>
            ))}
          </div>
        </StaggerReveal>

        {/* Scenario detail panel — fixed height prevents layout shift */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full" style={{ maxWidth: '400px', height: '370px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 rounded-2xl bg-ink overflow-hidden"
            >
              {/* Before didii */}
              <div className="px-6 pt-6 pb-4 border-b border-white/8">
                <p className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-2">Before didii</p>
                <p className="text-muted/70 text-sm leading-relaxed">{s.before}</p>
              </div>

              {/* With didii */}
              <div className="px-6 pt-4 pb-6 flex flex-col gap-3">
                <p className="text-yellow-500 text-[10px] font-semibold uppercase tracking-wider">With didii</p>

                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="bg-yellow-500/20 border border-yellow-500/25 text-cream text-sm rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%]">
                    {s.userMsg}
                  </div>
                </div>

                {/* didii reply */}
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-yellow-dark text-[9px] font-bold font-display flex-shrink-0">d</div>
                  <div className="glass rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-cream leading-snug max-w-[85%]">
                    {s.didiiReply}
                  </div>
                </div>

                {/* Toast */}
                <div className="mt-1 mx-auto inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-xs text-cream">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="#FFB800" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {s.toast}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
