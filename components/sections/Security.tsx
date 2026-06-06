import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Anchor partner bank',
    body: 'Funds held in a CBN-licensed banking partner. Your money never passes through a ledger without regulatory cover.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#B9A8FF" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1.5" fill="#B9A8FF"/>
      </svg>
    ),
    title: '256-bit encryption',
    body: 'Every message, every transaction, every session is encrypted end-to-end. No plain-text data anywhere in the stack.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#B9A8FF" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Your yes, always',
    body: 'Money never moves without your explicit confirmation. No auto-debits without consent. No surprise transactions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#B9A8FF" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 10h2l2-4 2 6 2-3h2" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'NDIC-insured deposits',
    body: 'Deposits insured by the Nigeria Deposit Insurance Corporation up to ₦5,000,000. Your savings are protected.',
  },
]

export function Security() {
  return (
    <section id="security" className="bg-ink py-24 sm:py-32 relative overflow-hidden">
      {/* subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(rgba(185,168,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(185,168,255,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-lilac text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            BANK-GRADE SECURITY
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-cream leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Built like a vault. Moves like a chat.
          </FunHeadline>
          <p className="text-muted text-base mt-4 leading-relaxed">
            Biometric login, PIN per transaction, real-time fraud detection.
            All the security of traditional banking — none of the friction.
          </p>
        </StaggerReveal>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, i) => (
            <StaggerReveal key={pillar.title} delay={i * 0.08}>
              <div className="glass rounded-modal p-6 flex flex-col gap-4 h-full hover:bg-white/8 transition-colors duration-200">
                <div className="w-11 h-11 rounded-2xl bg-lilac/10 border border-lilac/20 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-cream font-semibold text-base mb-2 leading-snug">{pillar.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            </StaggerReveal>
          ))}
        </div>

        {/* Trust badge strip */}
        <StaggerReveal delay={0.35} className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🏦 Anchor Partner Bank',
              '🛡️ NDIC Insured',
              '✅ CBN Licensed',
              '🔐 256-bit TLS',
              '🧬 Biometric login',
            ].map((badge) => (
              <span key={badge}
                    className="text-xs px-3.5 py-1.5 rounded-pill border border-white/10 text-muted bg-white/4">
                {badge}
              </span>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
