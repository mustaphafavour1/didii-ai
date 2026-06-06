import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L3 6v4c0 5.25 3.75 9.15 8 10.35C15.25 19.15 19 15.25 19 10V6l-8-4z" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Anchor partner bank',
    body: 'Funds held in a CBN-licensed banking partner. Regulatory cover on every naira.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="10" width="16" height="10" rx="2" stroke="#FFB800" strokeWidth="1.4"/>
        <path d="M7 10V6a5 5 0 0 1 10 0v4" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="12" cy="15" r="1.5" fill="#FFB800"/>
      </svg>
    ),
    title: '256-bit encryption',
    body: 'Every message, every transaction encrypted end-to-end. No plain-text data anywhere.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#FFB800" strokeWidth="1.4"/>
        <path d="M12 6v6l4 2" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Your yes, always',
    body: 'Money never moves without your explicit confirmation. No surprise auto-debits.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="18" height="13" rx="2" stroke="#FFB800" strokeWidth="1.4"/>
        <path d="M8 20h8M12 16v4" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M6 9h2l2-3 2 5 2-2h2" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'NDIC-insured deposits',
    body: 'Deposits insured up to ₦5,000,000 by the Nigeria Deposit Insurance Corporation.',
  },
]

export function Security() {
  return (
    <section id="security" className="bg-cream py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: Shield + 2x2 feature grid on top */}
          <StaggerReveal>
            <div className="relative">
              {/* Big shield SVG — centered, tall */}
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <svg
                    width="180"
                    height="210"
                    viewBox="0 0 120 140"
                    fill="none"
                    aria-hidden="true"
                    className="mx-auto"
                  >
                    <path
                      d="M60 8L12 30v40c0 30 22.5 56 48 64 25.5-8 48-34 48-64V30L60 8z"
                      fill="rgba(255,184,0,0.08)"
                      stroke="#FFB800"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M44 70l12 12 24-24"
                      stroke="#FFB800"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* Glow under shield */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-16 blur-2xl pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(255,184,0,0.25), transparent 70%)' }}
                  />
                </div>
              </div>

              {/* 2×2 feature grid */}
              <div className="grid grid-cols-2 gap-4">
                {PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-ink/8 bg-white p-5 flex flex-col gap-3"
                    style={{ boxShadow: '0 1px 4px rgba(15,17,8,0.05)' }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-ink font-semibold text-sm mb-1 leading-snug">{pillar.title}</h3>
                      <p className="text-ink/50 text-xs leading-relaxed">{pillar.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerReveal>

          {/* Right: eyebrow + title + subtitle + trust chips */}
          <StaggerReveal delay={0.15} direction="right">
            <p className="text-yellow-600 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              BANK-GRADE SECURITY
            </p>
            <h2
              className="font-display font-black text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)' }}
            >
              <FunHeadline as="span">Built like a vault.</FunHeadline>
              <br />
              <FunHeadline as="span">Moves like a chat.</FunHeadline>
            </h2>
            <p className="text-ink/55 text-base leading-relaxed max-w-md mb-8">
              Biometric login, PIN per transaction, real-time fraud detection.
              All the security of traditional banking — none of the friction.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                '🏦 Anchor Partner Bank',
                '🔒 256-bit TLS',
                '🛡️ NDIC Insured',
                '✅ CBN Licensed',
                '🧬 Biometric login',
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs px-3.5 py-1.5 rounded-pill border border-ink/12 text-ink/60 bg-ink/4"
                >
                  {chip}
                </span>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
