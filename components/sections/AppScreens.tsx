import Image from 'next/image'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const SCREENS = [
  { src: '/app/screen-1.svg', caption: 'Home', sub: 'Everything in one chat' },
  { src: '/app/screen-2.svg', caption: 'Fund your wallet', sub: 'Bank transfer or card' },
  { src: '/app/screen-3.svg', caption: 'Just for fun', sub: 'Split, save, flex' },
  { src: '/app/screen-4.svg', caption: 'How paying works', sub: 'Talk → confirm → done' },
  { src: '/app/screen-5.svg', caption: 'Your money, broken down', sub: 'Where it goes' },
]

export function AppScreens() {
  return (
    <section id="app-screens" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <StaggerReveal className="mb-14">
          <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            INSIDE DIDII
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-cream leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            This na didii.
          </FunHeadline>
          <p className="text-muted text-base mt-3 leading-relaxed max-w-lg">
            Five screens. One vibe. Clean, fast, yours.
          </p>
        </StaggerReveal>

        {/* Screen gallery — horizontal scroll on all sizes */}
        <div className="relative -mx-5 sm:-mx-8">
          <div className="flex gap-5 overflow-x-auto scroll-snap-x pb-6 px-5 sm:px-8 scrollbar-hide"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {SCREENS.map((screen, i) => (
              <div
                key={screen.src}
                className="flex-shrink-0 scroll-snap-item flex flex-col items-center gap-4"
                style={{ width: 'clamp(200px, 30vw, 260px)' }}
              >
                {/* Phone frame */}
                <div
                  className="relative w-full rounded-[28px] overflow-hidden border border-white/10"
                  style={{
                    aspectRatio: '9/19.5',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.4)',
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <Image
                    src={screen.src}
                    alt={screen.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 200px, 260px"
                  />
                </div>

                {/* Caption */}
                <div className="text-center">
                  <p className="text-cream text-sm font-semibold leading-tight">{screen.caption}</p>
                  <p className="text-muted text-xs mt-0.5">{screen.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-6 w-10 pointer-events-none hidden sm:block"
               style={{ background: 'linear-gradient(to right, #0C0E1A, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-6 w-16 pointer-events-none"
               style={{ background: 'linear-gradient(to left, #0C0E1A, transparent)' }} />
        </div>

        {/* Scroll hint */}
        <p className="text-center text-muted/50 text-xs mt-2 sm:hidden">← swipe to see more →</p>
      </div>
    </section>
  )
}
