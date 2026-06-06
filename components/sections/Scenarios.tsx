'use client'

import { useState } from 'react'
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
    title: 'Pay light bill quick',
    tag: 'Bills',
    before: 'Hunting for meter token number, USSD not working, searching the EEDC website...',
    userMsg: 'top up my EKEDC meter with 5k',
    didiiReply: 'Recharge EKEDC meter 04123456789 — ₦5,000. Oya?',
    toast: '✓ Meter topped · ₦5,000',
  },
  {
    emoji: '📷',
    title: 'Pay from a screenshot',
    tag: 'Snap to pay',
    before: "Switching apps, retyping account numbers by hand, praying you don't make an error...",
    userMsg: '[Photo of bank details]',
    didiiReply: 'GTBank · Olu Adeyemi · 0123456789. Pay ₦8,500?',
    toast: '✓ Paid · ₦8,500',
  },
  {
    emoji: '📱',
    title: 'Data & airtime, done',
    tag: 'Data',
    before: 'USSD code, app navigation, selecting network, picking bundle, entering number...',
    userMsg: 'MTN 10gb data for 08034567890',
    didiiReply: 'Top up MTN 10GB for 080····7890 — ₦3,000. I do am?',
    toast: '✓ 10GB sent on MTN',
  },
  {
    emoji: '₿',
    title: 'Cash out your crypto',
    tag: 'Crypto',
    before: 'P2P marketplace, trust scores, exchange rates, escrow, waiting for release...',
    userMsg: 'cash out 50 USDT to my GTBank',
    didiiReply: '50 USDT → ₦79,500 at ₦1,590. GTBank 0123456789. Sharp sharp?',
    toast: '✓ ₦79,500 in your GTBank',
  },
  {
    emoji: '📺',
    title: 'Subscriptions sorted',
    tag: 'Entertainment',
    before: 'Forgetting decoder number, missed deadline, going a week without TV...',
    userMsg: 'renew DSTV and GOtv at once',
    didiiReply: 'DSTV ₦13,500 + GOtv ₦6,100 = ₦19,600 total. I do am?',
    toast: '✓ Both renewed. Enjoy!',
  },
]

export function Scenarios() {
  const [active, setActive] = useState(0)
  const s = SCENARIOS[active]

  return (
    <section id="scenarios" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header — centered */}
        <StaggerReveal className="mb-14 text-center">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            REAL LIFE
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-ink leading-tight tracking-tight mx-auto"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Every money moment, covered.
          </FunHeadline>
        </StaggerReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: scenario list */}
          <div className="flex flex-col gap-2">
            {SCENARIOS.map((scenario, i) => (
              <StaggerReveal key={scenario.title} delay={i * 0.06}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200 ${
                    active === i
                      ? 'bg-ink text-cream shadow-card-dark'
                      : 'hover:bg-ink/8 text-ink'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{scenario.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm leading-tight ${active === i ? 'text-cream' : 'text-ink'}`}>
                      {scenario.title}
                    </p>
                    <p className={`text-xs mt-0.5 ${active === i ? 'text-muted' : 'text-ink/40'}`}>
                      {scenario.tag}
                    </p>
                  </div>
                  {active === i && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-yellow-500">
                      <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </StaggerReveal>
            ))}
          </div>

          {/* Right: scenario detail — phone-width proportions */}
          <StaggerReveal delay={0.15} direction="right" className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                className="rounded-modal bg-ink overflow-hidden mx-auto"
                style={{
                  maxWidth: '280px',
                  boxShadow: '0 2px 8px rgba(15,17,8,0.2), 0 8px 32px rgba(15,17,8,0.3)',
                }}
              >
                {/* Before didii */}
                <div className="px-5 pt-5 pb-4 border-b border-white/8">
                  <p className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-2">Before didii</p>
                  <p className="text-muted/70 text-sm leading-relaxed">{s.before}</p>
                </div>

                {/* With didii */}
                <div className="px-5 pt-4 pb-5 flex flex-col gap-3">
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
                  <div className="mt-1 mx-auto inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-pill px-4 py-2 text-xs text-cream">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="#FFB800" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {s.toast}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
