import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const MODES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V8a4 4 0 0 1 4-4z" stroke="#4B3DF5" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6 15a8 8 0 0 0 16 0" stroke="#4B3DF5" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M14 23v4" stroke="#4B3DF5" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Talk am',
    description: 'In the market, on the road, hands full? Voice it. didii hears Pidgin, Yoruba, Hausa, Igbo — wherever you are.',
    chips: [
      '"Abeg send 5k to Chidi"',
      '"Top up my meter"',
      '"How much I get for wallet?"',
    ],
    accent: 'indigo',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#E2613C" strokeWidth="1.6"/>
        <path d="M9 13h2M13 13h1M16 13h3M9 17h4M14 17h5" stroke="#E2613C" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Type am',
    description: 'At your desk or on the go — type exactly what you want in plain language. No codes, no reference numbers, just words.',
    chips: [
      '"Pay my DSTV and Airtel data"',
      '"Cash out 50 USDT to GTBank"',
      '"Send ₦2,000 to mama for food"',
    ],
    accent: 'terracotta',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="16" height="20" rx="2.5" stroke="#B9A8FF" strokeWidth="1.6"/>
        <circle cx="14" cy="15" r="4" stroke="#B9A8FF" strokeWidth="1.4"/>
        <circle cx="14" cy="15" r="1.5" fill="#B9A8FF"/>
        <path d="M11 7h6" stroke="#B9A8FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Snap am',
    description: "Got a screenshot, a bill, or someone's account details? Send the photo. didii reads it and turns it into a payment in seconds.",
    chips: [
      '[Photo of invoice] → "Pay ₦45,000 to Oluwaseun?"',
      '[Screenshot of account] → "GTBank · 0123456789. Send?"',
      '[Bill image] → "Eko Electricity · ₦8,500. I do am?"',
    ],
    accent: 'lilac',
  },
]

const ACCENT_CLASSES: Record<string, { border: string; bg: string; text: string }> = {
  indigo:     { border: 'border-indigo/20',     bg: 'bg-indigo/8',     text: 'text-indigo-300' },
  terracotta: { border: 'border-terracotta/20', bg: 'bg-terracotta/8', text: 'text-terracotta' },
  lilac:      { border: 'border-lilac/25',      bg: 'bg-lilac/8',      text: 'text-lilac' },
}

export function InputModes() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-16 max-w-2xl">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            HOWEVER IT'S EASIEST
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-ink leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Voice, type, or snap. didii gets it.
          </FunHeadline>
          <p className="text-ink/50 text-base mt-4 leading-relaxed">
            In the market? <strong className="text-ink font-semibold">Talk am.</strong>{' '}
            At your desk? <strong className="text-ink font-semibold">Type am.</strong>{' '}
            Got a screenshot or a bill?{' '}
            <strong className="text-ink font-semibold">Snap am.</strong>
          </p>
        </StaggerReveal>

        {/* Mode cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {MODES.map((mode, i) => {
            const ac = ACCENT_CLASSES[mode.accent]
            return (
              <StaggerReveal key={mode.label} delay={i * 0.1}>
                <div className="rounded-modal border border-ink/8 bg-white p-7 flex flex-col gap-5 h-full"
                     style={{ boxShadow: '0 2px 8px rgba(12,14,26,0.05), 0 8px 32px rgba(12,14,26,0.04)' }}>

                  <div className={`w-12 h-12 rounded-2xl border ${ac.border} ${ac.bg} flex items-center justify-center`}>
                    {mode.icon}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-ink text-2xl mb-2">{mode.label}</h3>
                    <p className="text-ink/55 text-sm leading-relaxed">{mode.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    {mode.chips.map((chip) => (
                      <div key={chip}
                           className={`rounded-xl border ${ac.border} ${ac.bg} px-3.5 py-2.5`}>
                        <span className={`${ac.text} text-xs font-medium leading-snug`}>{chip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
