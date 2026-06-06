import Image from 'next/image'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const SCREENS = [
  { src: '/app/screen-1.svg', caption: 'Home chat', sub: 'Everything in one conversation' },
  { src: '/app/screen-2.svg', caption: 'Fund wallet', sub: 'Bank transfer or card' },
  { src: '/app/screen-3.svg', caption: 'Split & save', sub: 'Money with your circle' },
  { src: '/app/screen-4.svg', caption: 'Pay in 3 steps', sub: 'Talk → confirm → done' },
  { src: '/app/screen-5.svg', caption: 'Spending view', sub: 'Where your money goes' },
]

const FEATURES = [
  'Type, talk, or snap a photo',
  'Send money to any Nigerian bank',
  'Pay all your bills in one place',
  'Cash out USDT, BTC, ETH instantly',
  'Pidgin, Yoruba, Hausa, Igbo, English',
  'Bank-grade security, zero friction',
]

export function AppScreens() {
  return (
    <section id="app-screens" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-16 text-center">
          <p className="text-yellow-500 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            INSIDE DIDII
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-cream leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Have a taste of Didii.
          </FunHeadline>
        </StaggerReveal>

        {/* Two-col: screens left, features right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Screens — horizontal scroll strip */}
          <StaggerReveal delay={0.1}>
            <div className="relative -mx-5 sm:mx-0">
              <div
                className="flex gap-4 overflow-x-auto scroll-snap-x pb-4 px-5 sm:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {SCREENS.map((screen, i) => (
                  <div
                    key={screen.src}
                    className="flex-shrink-0 scroll-snap-item flex flex-col items-center gap-3"
                    style={{ width: 'clamp(130px, 18vw, 160px)' }}
                  >
                    {/* Phone frame */}
                    <div
                      className="relative w-full rounded-[22px] overflow-hidden border border-white/10"
                      style={{
                        aspectRatio: '9/19.5',
                        boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 16px 40px rgba(0,0,0,0.5), 0 0 40px rgba(255,184,0,${0.05 + i * 0.02})`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      <Image
                        src={screen.src}
                        alt={screen.caption}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-cream text-xs font-semibold leading-tight">{screen.caption}</p>
                      <p className="text-muted text-[10px] mt-0.5">{screen.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fade right edge */}
              <div className="absolute right-0 top-0 bottom-4 w-16 pointer-events-none"
                   style={{ background: 'linear-gradient(to left, #0C0E1A, transparent)' }} />
            </div>
          </StaggerReveal>

          {/* Feature list */}
          <StaggerReveal delay={0.2} direction="right">
            <div className="flex flex-col gap-4">
              <p className="text-muted text-sm leading-relaxed mb-2">
                One app. Every money thing you need to do, handled the moment you say it.
              </p>
              {FEATURES.map((feat, i) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="#FFB800" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-cream/80 text-sm">{feat}</span>
                </div>
              ))}

              <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['bg-yellow-500', 'bg-terracotta', 'bg-lilac'].map((bg, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-ink flex items-center justify-center text-[8px] font-bold text-yellow-dark`}>
                      {['T', 'A', 'K'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-muted text-xs">2,859 Nigerians waiting · Join them</p>
              </div>
            </div>
          </StaggerReveal>
        </div>

        <p className="text-center text-muted/40 text-xs mt-4 sm:hidden">← swipe to see more →</p>
      </div>
    </section>
  )
}
