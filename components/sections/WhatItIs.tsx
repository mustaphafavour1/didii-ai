import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

export function WhatItIs() {
  return (
    <section id="what-it-is" className="bg-cream py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-14 text-center">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            ONE didii · TWO WAYS
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-ink leading-tight tracking-tight mx-auto"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            An app. And a widget that lives in your browser.
          </FunHeadline>
        </StaggerReveal>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* App card */}
          <StaggerReveal delay={0.08}>
            <div className="relative rounded-modal bg-ink overflow-hidden p-8 flex flex-col gap-5 h-full min-h-[320px]"
                 style={{ boxShadow: '0 2px 8px rgba(12,14,26,0.08), 0 8px 32px rgba(12,14,26,0.08)' }}>
              {/* bg glow */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-40"
                   style={{ background: 'radial-gradient(ellipse at top right, rgba(75,61,245,0.4), transparent 65%)' }} />

              <div className="relative z-10 flex flex-col gap-5 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-indigo/20 border border-indigo/30 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="5" y="2" width="12" height="18" rx="2.5" stroke="#B9A8FF" strokeWidth="1.5"/>
                    <path d="M9 5h4M11 17h.01" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-display font-bold text-cream text-xl mb-2">The app</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    Your whole money life in one chat. Send, pay, save, cash out crypto,
                    watch your money move. Talk Pidgin, Yoruba, Hausa, Igbo or English —
                    didii understands all of it.
                  </p>
                </div>

                {/* Language pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Pidgin', 'Yoruba', 'Hausa', 'Igbo', 'English'].map((lang) => (
                    <span key={lang}
                          className="text-xs px-2.5 py-1 rounded-pill border border-white/10 text-cream/60 bg-white/5">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </StaggerReveal>

          {/* Widget card */}
          <StaggerReveal delay={0.16}>
            <div className="relative rounded-modal bg-cream border border-ink/8 overflow-hidden p-8 flex flex-col gap-5 h-full min-h-[320px]"
                 style={{ boxShadow: '0 2px 8px rgba(12,14,26,0.08), 0 8px 32px rgba(12,14,26,0.06)' }}>
              {/* bg glow */}
              <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-30"
                   style={{ background: 'radial-gradient(ellipse at bottom left, rgba(226,97,60,0.3), transparent 65%)' }} />

              <div className="relative z-10 flex flex-col gap-5 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="18" height="13" rx="2" stroke="#E2613C" strokeWidth="1.5"/>
                    <path d="M7 18h8" stroke="#E2613C" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M11 18v-1" stroke="#E2613C" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="6" y="8" width="10" height="5" rx="1" fill="#E2613C" opacity="0.3"/>
                  </svg>
                </div>

                <div>
                  <h3 className="font-display font-bold text-ink text-xl mb-2">The browser widget</h3>
                  <p className="text-ink/60 leading-relaxed text-sm">
                    Summon didii on top of any website. Paying a bill online, checking out,
                    copying an account number? Tap, talk, done — without leaving the page
                    or opening the app.
                  </p>
                </div>

                {/* Widget mockup */}
                <div className="mt-auto rounded-xl border border-ink/10 bg-white overflow-hidden">
                  {/* browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-ink/5 border-b border-ink/8">
                    {['bg-red-400','bg-yellow-400','bg-green-400'].map(c=>(
                      <span key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                    <span className="ml-2 text-ink/30 text-[10px] flex-1 truncate">paystack.com/checkout</span>
                  </div>
                  <div className="p-3 relative">
                    <div className="h-8 bg-ink/5 rounded mb-2" />
                    <div className="h-4 w-2/3 bg-ink/5 rounded" />
                    {/* didii widget bubble */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-ink rounded-lg px-2.5 py-1.5 shadow-card-dark text-[10px] text-cream font-medium">
                      <span className="w-4 h-4 rounded-md bg-indigo flex items-center justify-center text-[8px] font-bold font-display">d</span>
                      Pay with didii ↗
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
