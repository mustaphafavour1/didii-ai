import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

// Features indexed 0–5 as per the asymmetric grid spec
const FEATURES = [
  {
    // Index 0 — col 2, row 2
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M20 12V22H2V12M22 7H0v5h22V7zM11 22V7M11 7H6.5a2.5 2.5 0 0 1 0-5C10 2 11 7 11 7zM11 7h4.5a2.5 2.5 0 0 0 0-5C12 2 11 7 11 7z" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Transfers',
    description: "Send money like you're texting. To 'mama', a contact, or a number.",
    tag: 'Live',
    highlight: false,
    comingSoon: false,
    gridColumn: '2' as const,
    gridRow: '2' as const,
    border: 'border-b border-ink/10',
  },
  {
    // Index 1 — col 2, row 3
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 13v4M10 15h4" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bills',
    description: "DSTV, electricity, airtime, data — sorted before you remember they're due.",
    tag: 'Live',
    highlight: false,
    comingSoon: false,
    gridColumn: '2' as const,
    gridRow: '3' as const,
    border: 'border-b border-ink/10',
  },
  {
    // Index 2 — col 3, row 1 — HIGHLIGHT (yellow bg)
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#1A1200" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="2.5" stroke="#1A1200" strokeWidth="1.4"/>
        <path d="M11 5v1M11 16v1M5 11h1M16 11h1" stroke="#1A1200" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Snap to pay',
    description: 'Photo of any invoice or account details → confirmed payment.',
    tag: 'Live',
    highlight: true,
    comingSoon: false,
    gridColumn: '3' as const,
    gridRow: '1' as const,
    border: 'border-r border-t border-ink/10',
  },
  {
    // Index 3 — col 3, row 2
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="#FFB800" strokeWidth="1.5"/>
        <path d="M12 8v4l3 2" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12c0-5.523 4.477-10 10-10 2.36 0 4.53.817 6.247 2.174" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Crypto',
    description: 'Cash out USDT, BTC, ETH at real-time rates. No P2P stress.',
    tag: 'Live',
    highlight: false,
    comingSoon: false,
    gridColumn: '3' as const,
    gridRow: '2' as const,
    border: 'border-r border-ink/10',
  },
  {
    // Index 4 — col 3, row 3
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M1 21h22" stroke="#8E90A6" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="10" width="4" height="6" rx="0.5" stroke="#8E90A6" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'didii Safe',
    description: 'Save goals, group ajo, earn while you wait.',
    tag: 'Coming soon',
    highlight: false,
    comingSoon: true,
    gridColumn: '3' as const,
    gridRow: '3' as const,
    border: 'border-b border-r border-ink/10',
  },
  {
    // Index 5 — col 1, row 3
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="#8E90A6" strokeWidth="1.5"/>
        <path d="M2 11h4M16 11h4M11 2v4M11 16v4" stroke="#8E90A6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Remittance',
    description: 'Send abroad, receive from abroad. Japa sorted.',
    tag: 'Coming soon',
    highlight: false,
    comingSoon: true,
    gridColumn: '1' as const,
    gridRow: '3' as const,
    border: 'border-b border-l border-ink/10',
  },
]

export function WhatDidiDoes() {
  return (
    <section id="features" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/*
          Asymmetric 3-col grid:
          [Title (col1, rows 1-2)]   [empty (col2,r1)]     [Feature2 (col3,r1)]
          [Title (col1, rows 1-2)]   [Feature0 (col2,r2)]  [Feature3 (col3,r2)]
          [Feature5 (col1,r3)]       [Feature1 (col2,r3)]  [Feature4 (col3,r3)]
        */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto auto auto',
          }}
        >
          {/* Title block — spans col1, rows 1-2 */}
          <div style={{ gridColumn: '1', gridRow: '1 / 3' }} className="p-8 sm:p-10 flex flex-col justify-center">
            <StaggerReveal>
              <p className="text-yellow-600 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                WHAT DIDII DOES
              </p>
              <h2
                className="font-display font-black text-ink leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
              >
                <FunHeadline as="span">Everything and Anything Money,</FunHeadline>
                <br />
                <FunHeadline as="span">inside one chat.</FunHeadline>
              </h2>
            </StaggerReveal>
          </div>

          {/* Empty cell — col2, row1 */}
          <div style={{ gridColumn: '2', gridRow: '1' }} />

          {/* Feature cells — each in a wrapper div with grid placement */}
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              style={{ gridColumn: feature.gridColumn, gridRow: feature.gridRow }}
            >
              <StaggerReveal delay={i * 0.07}>
                <div
                  className={`p-7 flex flex-col gap-4 h-full transition-colors duration-200 ${feature.border} ${
                    feature.highlight
                      ? 'bg-yellow-500'
                      : feature.comingSoon
                      ? 'opacity-70'
                      : 'bg-transparent hover:bg-ink/3'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    feature.highlight
                      ? 'bg-yellow-dark/15 border border-yellow-dark/20'
                      : feature.comingSoon
                      ? 'bg-ink/8 border border-ink/10'
                      : 'bg-yellow-500/10 border border-yellow-500/20'
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-display font-bold text-lg ${
                        feature.highlight ? 'text-yellow-dark' : feature.comingSoon ? 'text-ink/50' : 'text-ink'
                      }`}>
                        {feature.title}
                      </h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-pill ${
                        feature.highlight
                          ? 'bg-yellow-dark/15 text-yellow-dark border border-yellow-dark/20'
                          : feature.comingSoon
                          ? 'bg-muted/15 text-muted border border-muted/20'
                          : 'bg-yellow-500/15 text-yellow-600 border border-yellow-500/25'
                      }`}>
                        {feature.tag}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${
                      feature.highlight ? 'text-yellow-dark/70' : feature.comingSoon ? 'text-ink/40' : 'text-ink/55'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerReveal>
            </div>
          ))}
        </div>

        {/* Coming-soon strip */}
        <StaggerReveal delay={0.5} className="mt-8 pt-6 border-t border-ink/8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-muted text-xs">Also coming:</span>
            {['School fees', 'Voice transactions', 'Card top-up', 'Group ajo', 'Investments'].map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-pill border border-ink/12 text-ink/50 bg-ink/3"
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
