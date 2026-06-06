import Link from 'next/link'
import { ChatDemo } from '@/components/ChatDemo'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-ink flex flex-col overflow-hidden" aria-label="Hero">
      {/* Aurora glow — behind everything */}
      <div className="aurora-blob absolute top-1/3 right-0 w-[600px] h-[600px] pointer-events-none -translate-y-1/4 translate-x-1/4"
           style={{ background: 'radial-gradient(ellipse at center, rgba(75,61,245,0.28) 0%, rgba(185,168,255,0.08) 45%, transparent 72%)' }} />
      <div className="aurora-blob absolute -bottom-20 left-1/4 w-[400px] h-[400px] pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center, rgba(226,97,60,0.12) 0%, transparent 65%)', animationDelay: '2s' }} />

      <div className="relative z-10 flex-1 flex flex-col pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1">

          {/* ── Left: Copy ─────────────────────────────────────── */}
          <div className="flex flex-col gap-7 lg:max-w-[560px]">

            {/* Eyebrow pill */}
            <StaggerReveal delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-pill border border-white/12 bg-white/5 px-4 py-1.5 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
                </span>
                <span className="text-cream/80 text-xs font-medium">
                  Now accepting early access · 2,859 Nigerians waiting
                </span>
              </div>
            </StaggerReveal>

            {/* H1 */}
            <StaggerReveal delay={0.12}>
              <FunHeadline
                as="h1"
                className="font-display font-black text-cream leading-[1.05] tracking-tight"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
              >
                Smarter banking. Just by typing.
              </FunHeadline>
            </StaggerReveal>

            {/* Subhead */}
            <StaggerReveal delay={0.2}>
              <div className="flex flex-col gap-2">
                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[480px]">
                  didii is the AI you just talk to. Type what you want — send money, pay your light,
                  buy data, cash out crypto — and it handles the rest. In the app, or right inside your browser.
                </p>
                <p className="text-lilac/80 text-sm italic">
                  &ldquo;Abeg, just talk to am. E go sort you.&rdquo;
                </p>
              </div>
            </StaggerReveal>

            {/* CTAs */}
            <StaggerReveal delay={0.28}>
              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center gap-2 rounded-pill bg-indigo text-white px-6 py-3 text-sm font-semibold hover:bg-indigo-600 active:scale-95 transition-all duration-150 shadow-glow-indigo"
                >
                  Get early access
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-1.5 text-cream/70 text-sm font-medium hover:text-cream transition-colors group"
                >
                  See it work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </StaggerReveal>

            {/* Trust strip */}
            <StaggerReveal delay={0.35}>
              <div className="flex flex-wrap gap-4 items-center pt-2">
                {[
                  'Anchor partner bank',
                  'CBN licensed',
                  'NDIC-insured deposits',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-muted/70 text-xs">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6L5 9L10 3" stroke="#4B3DF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </StaggerReveal>
          </div>

          {/* ── Right: Phone demo ───────────────────────────────── */}
          <StaggerReveal delay={0.18} direction="right" className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow under phone */}
              <div className="absolute inset-0 scale-75 translate-y-8 blur-3xl rounded-full"
                   style={{ background: 'radial-gradient(ellipse, rgba(75,61,245,0.5) 0%, rgba(185,168,255,0.15) 50%, transparent 75%)' }} />
              <ChatDemo />
            </div>
          </StaggerReveal>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, transparent, #0C0E1A)' }} />
    </section>
  )
}
