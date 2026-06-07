import Image from 'next/image'
import Link from 'next/link'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { HeroInputCycler } from '@/components/HeroInputCycler'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-ink flex flex-col overflow-hidden" aria-label="Hero">
      {/* Yellow aurora glow — not blue/purple */}
      <div
        className="aurora-blob absolute top-1/4 right-0 w-[700px] h-[700px] pointer-events-none -translate-y-1/4 translate-x-1/3"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,184,0,0.18) 0%, rgba(255,184,0,0.05) 45%, transparent 72%)' }}
      />
      <div
        className="aurora-blob absolute -bottom-20 left-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,184,0,0.08) 0%, transparent 65%)', animationDelay: '2s' }}
      />

      <div className="relative z-10 flex-1 flex flex-col pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-1">

          {/* ── Left: Copy ─────────────────────────────────────── */}
          <div className="flex flex-col gap-7 lg:max-w-[560px]">

            {/* H1 — 2 separate lines via spans */}
            <StaggerReveal delay={0.08}>
              <h1
                className="font-display font-black text-cream leading-[1.0] tracking-tight"
                style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.8rem)' }}
              >
                <FunHeadline as="span">Smarter Banking</FunHeadline>
                <br />
                <FunHeadline as="span">Just by Typing</FunHeadline>
              </h1>
            </StaggerReveal>

            {/* Subhead */}
            <StaggerReveal delay={0.16}>
              <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[460px]">
                didii is the money AI you just talk to. Type what you want — send money to mum, buy data, cash out crypto, summarize my monthly spending — and it handles the rest.
              </p>
            </StaggerReveal>

            {/* Small italic caption */}
            <StaggerReveal delay={0.22}>
              <p className="text-muted/55 text-sm italic">in app or right inside your browser</p>
            </StaggerReveal>

            {/* CTAs */}
            <StaggerReveal delay={0.28}>
              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center gap-2 rounded-pill bg-yellow-500 text-yellow-dark px-7 py-3.5 text-sm font-bold hover:bg-yellow-400 active:scale-95 transition-all duration-150 shadow-glow-yellow"
                >
                  Get early access →
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-1.5 text-cream/70 text-sm font-medium hover:text-cream transition-colors group"
                >
                  See how it works
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </StaggerReveal>

            {/* Trust row */}
            <StaggerReveal delay={0.35}>
              <div className="flex flex-wrap gap-4 items-center pt-1">
                {['Anchor partner bank', 'CBN licensed', 'NDIC-insured'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-muted/70 text-xs">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6L5 9L10 3" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </StaggerReveal>
          </div>

          {/* ── Right: Phone frame + chips below ───────────────── */}
          <StaggerReveal delay={0.18} direction="right" className="flex flex-col items-center lg:items-end gap-5">
            <div className="relative">
              {/* Glow under phone */}
              <div
                className="absolute inset-0 scale-75 translate-y-10 blur-3xl rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(255,184,0,0.35) 0%, rgba(255,184,0,0.1) 50%, transparent 75%)' }}
              />

              {/* Phone frame */}
              <div
                className="relative overflow-hidden rounded-[36px] border border-white/12"
                style={{
                  width: 'clamp(240px, 32vw, 300px)',
                  aspectRatio: '9/19.5',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 32px 64px rgba(0,0,0,0.5), 0 0 80px rgba(255,184,0,0.12)',
                }}
              >
                <Image
                  src="/app/screen-1.svg"
                  alt="didii app home screen"
                  fill
                  className="object-cover"
                  sizes="300px"
                  priority
                />

                {/* Input cycler overlay at bottom */}
                <div
                  className="absolute bottom-0 inset-x-0 p-3"
                  style={{ background: 'linear-gradient(to top, rgba(15,17,8,0.95) 60%, transparent)' }}
                >
                  <HeroInputCycler />
                </div>
              </div>
            </div>

            {/* Two chips under the phone */}
            <div className="flex gap-2.5 flex-wrap justify-center">
              <span className="flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-pill border border-yellow-500/30 text-yellow-500 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
                </span>
                Now accepting early access
              </span>
              <span className="text-xs px-3.5 py-1.5 rounded-pill border border-white/10 text-muted">
                Join 2,589 other Nigerians
              </span>
            </div>
          </StaggerReveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0F1108)' }}
      />
    </section>
  )
}
