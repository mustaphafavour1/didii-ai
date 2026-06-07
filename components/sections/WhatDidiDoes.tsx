import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M20 12V22H2V12M22 7H0v5h22V7zM11 22V7M11 7H6.5a2.5 2.5 0 0 1 0-5C10 2 11 7 11 7zM11 7h4.5a2.5 2.5 0 0 0 0-5C12 2 11 7 11 7z" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Transfers',
    description: "Send money just by saying it — to mama, a contact, or any account number you have.",
    tag: 'Live',
    comingSoon: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#FFB800" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="2.5" stroke="#FFB800" strokeWidth="1.4"/>
        <path d="M11 5v1M11 16v1M5 11h1M16 11h1" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Snap to pay',
    description: 'Point at any invoice or account details. One photo is all it takes to pay.',
    tag: 'Live',
    comingSoon: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="#FFB800" strokeWidth="1.5"/>
        <path d="M12 8v4l3 2" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12c0-5.523 4.477-10 10-10 2.36 0 4.53.817 6.247 2.174" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Crypto',
    description: 'Cash out USDT, BTC, or ETH at real-time rates. No P2P stress, no escrow.',
    tag: 'Live',
    comingSoon: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 13v4M10 15h4" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bills',
    description: "DSTV, electricity, airtime, data — all sorted before you even remember they're due.",
    tag: 'Live',
    comingSoon: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M1 21h22" stroke="#8E90A6" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="10" width="4" height="6" rx="0.5" stroke="#8E90A6" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'didii Safe',
    description: 'Save goals, group ajo, earn interest — everything in one place while money waits.',
    tag: 'Coming soon',
    comingSoon: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="#8E90A6" strokeWidth="1.5"/>
        <path d="M2 11h4M16 11h4M11 2v4M11 16v4" stroke="#8E90A6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Remittance',
    description: 'Send or receive money across borders, without the usual paperwork and stress.',
    tag: 'Coming soon',
    comingSoon: true,
  },
]

export function WhatDidiDoes() {
  return (
    <section id="features" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header above the grid */}
        <StaggerReveal className="mb-12 text-center">
          <p className="text-yellow-600 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
            WHAT DIDII DOES
          </p>
          <h2
            className="font-display font-black text-ink leading-tight tracking-tight mx-auto"
            style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)' }}
          >
            <FunHeadline as="span">Everything and Anything Money,</FunHeadline>
            <br />
            <FunHeadline as="span">inside one chat.</FunHeadline>
          </h2>
          <p className="text-ink/45 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Here&apos;s just a few of the things that Didii can help you handle better with your money.
          </p>
        </StaggerReveal>

        {/* Equal 3-col grid — all 6 cards same width */}
        <div className="border border-ink/8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => {
              const isLastCol = (i + 1) % 3 === 0
              const isLastRow = i >= 3
              return (
                <StaggerReveal key={feature.title} delay={i * 0.07}>
                  <div
                    className={[
                      'p-8 sm:p-9 flex flex-col gap-5 h-full transition-all duration-200',
                      !isLastCol ? 'lg:border-r border-ink/8' : '',
                      !isLastRow ? 'border-b border-ink/8' : '',
                      feature.comingSoon
                        ? 'opacity-60 cursor-default'
                        : 'cursor-default hover:shadow-[inset_0_0_0_1px_rgba(255,184,0,0.25)]',
                    ].join(' ')}
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      feature.comingSoon
                        ? 'bg-ink/6 border border-ink/8'
                        : 'bg-yellow-500/10 border border-yellow-500/20'
                    }`}>
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-display font-bold text-lg ${
                          feature.comingSoon ? 'text-ink/45' : 'text-ink'
                        }`}>
                          {feature.title}
                        </h3>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-pill ${
                          feature.comingSoon
                            ? 'bg-muted/12 text-muted border border-muted/18'
                            : 'bg-yellow-500/12 text-yellow-600 border border-yellow-500/22'
                        }`}>
                          {feature.tag}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        feature.comingSoon ? 'text-ink/35' : 'text-ink/55'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerReveal>
              )
            })}
          </div>
        </div>

        {/* Coming-soon strip */}
        <StaggerReveal delay={0.5} className="mt-8 pt-6 border-t border-ink/6">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-muted text-xs">Also coming:</span>
            {['School fees', 'Voice transactions', 'Card top-up', 'Group ajo', 'Investments'].map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-pill border border-ink/10 text-ink/45 bg-ink/2"
              >
                {item}
              </span>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
