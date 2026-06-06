import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M20 12V22H2V12" stroke="#4B3DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7H0v5h22V7z" stroke="#4B3DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 22V7M11 7H6.5a2.5 2.5 0 0 1 0-5C10 2 11 7 11 7zM11 7h4.5a2.5 2.5 0 0 0 0-5C12 2 11 7 11 7z" stroke="#4B3DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Transfers',
    description: 'Send money like you\'re texting. To a contact, a number, or "mama" — didii figures out the details.',
    tag: 'Live',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#4B3DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M12 13v4M10 15h4" stroke="#4B3DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bills',
    description: 'DSTV, GOtv, EKEDC, IKEDC, AEDC, airtime, data. Sorted before you remember they\'re due.',
    tag: 'Live',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#E2613C" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="2.5" stroke="#E2613C" strokeWidth="1.4"/>
        <path d="M11 5v1M11 16v1M5 11h1M16 11h1" stroke="#E2613C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Snap to pay',
    description: 'Send a photo of any bank details, invoice, or bill. didii reads it and turns it into a confirmed payment.',
    tag: 'Live',
    highlight: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="#B9A8FF" strokeWidth="1.5"/>
        <path d="M12 8v4l3 2" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12c0-5.523 4.477-10 10-10 2.36 0 4.53.817 6.247 2.174" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Crypto',
    description: 'Cash out your USDT, BTC, ETH at real-time rates. No P2P stress, no exchange navigation.',
    tag: 'Live',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" stroke="#8E90A6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1 21h22" stroke="#8E90A6" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="10" width="4" height="6" rx="0.5" stroke="#8E90A6" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'didii Safe',
    description: 'Lock away savings goals. Ajo-style group savings with your circle. Earn while you wait.',
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
    title: 'International remittance',
    description: 'Send money abroad, receive from abroad. Japa made easy — send home, receive from the diaspora.',
    tag: 'Coming soon',
    comingSoon: true,
  },
]

export function WhatDidiDoes() {
  return (
    <section id="features" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-14 max-w-xl">
          <p className="text-indigo text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            WHAT DIDII DOES
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-ink leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Every money thing. One chat.
          </FunHeadline>
        </StaggerReveal>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <StaggerReveal key={feature.title} delay={i * 0.07}>
              <div className={`rounded-modal p-6 flex flex-col gap-4 h-full border transition-colors duration-200 ${
                feature.comingSoon
                  ? 'bg-ink/4 border-ink/8 opacity-80'
                  : feature.highlight
                  ? 'bg-ink border-ink shadow-card-dark'
                  : 'bg-white border-ink/8 shadow-card'
              }`}>

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  feature.comingSoon
                    ? 'bg-ink/8 border border-ink/10'
                    : feature.highlight
                    ? 'bg-terracotta/15 border border-terracotta/25'
                    : 'bg-indigo/8 border border-indigo/15'
                }`}>
                  {feature.icon}
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-display font-bold text-lg ${feature.highlight || feature.comingSoon ? 'text-cream' : 'text-ink'}`}>
                      {feature.title}
                    </h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-pill ${
                      feature.comingSoon
                        ? 'bg-muted/15 text-muted border border-muted/20'
                        : feature.highlight
                        ? 'bg-terracotta/20 text-terracotta border border-terracotta/25'
                        : 'bg-indigo/10 text-indigo border border-indigo/20'
                    }`}>
                      {feature.tag}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    feature.highlight ? 'text-cream/60' : feature.comingSoon ? 'text-ink/50' : 'text-ink/55'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </StaggerReveal>
          ))}
        </div>

        {/* Coming-soon tag strip */}
        <StaggerReveal delay={0.4} className="mt-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-muted text-xs">Also coming:</span>
            {['School fees', 'Voice transactions', 'Card top-up', 'Group ajo', 'Investment'].map((item) => (
              <span key={item}
                    className="text-xs px-3 py-1 rounded-pill border border-ink/12 text-ink/50 bg-ink/4">
                {item}
              </span>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
