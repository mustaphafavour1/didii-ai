import Link from 'next/link'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

export function TryIt() {
  return (
    <section
      id="try-it"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A1200 0%, #221800 50%, #1A1200 100%)' }}
    >
      {/* Yellow glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,184,0,0.14) 0%, transparent 70%)' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">

        <StaggerReveal>
          <p className="text-yellow-500/70 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
            GET EARLY ACCESS
          </p>
          <h2
            className="font-display font-black text-cream leading-tight tracking-tight mx-auto mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
          >
            <FunHeadline as="span">Ready to have a taste??</FunHeadline>
          </h2>
          <p className="text-cream/60 text-base leading-relaxed max-w-md mx-auto mb-2">
            The whole thing, right inside your browser.
          </p>
          <p className="text-cream/35 text-sm mb-10 italic">
            Live prototype — onboarding, chat, wallet, the lot. Real didii vibes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#waitlist"
              className="rounded-pill px-8 py-3.5 bg-yellow-500 text-yellow-dark text-sm font-bold hover:bg-yellow-400 active:scale-95 transition-all duration-150 shadow-glow-yellow"
            >
              sure, let&apos;s see →
            </Link>
            <Link
              href="#waitlist"
              className="rounded-pill px-6 py-3.5 border border-yellow-500/25 text-yellow-500/70 text-sm font-medium hover:bg-yellow-500/8 transition-colors"
            >
              I&apos;d wait for the real deal
            </Link>
          </div>
        </StaggerReveal>

        {/* Browser widget mockup */}
        <StaggerReveal delay={0.2} className="mt-16">
          <div className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 mx-auto border border-yellow-500/20 bg-yellow-500/5">
            <div className="w-9 h-9 rounded-xl bg-yellow-500 border border-yellow-500/50 flex items-center justify-center shadow-glow-yellow-sm">
              <span className="font-display font-bold text-yellow-dark text-base">d</span>
            </div>
            <div className="text-left">
              <p className="text-cream text-sm font-semibold">didii browser widget</p>
              <p className="text-cream/40 text-xs">Summon on any website · Chrome &amp; Firefox</p>
            </div>
            <div className="ml-4 hidden sm:flex gap-2">
              {['Send', 'Pay', 'Cash out'].map((action) => (
                <span
                  key={action}
                  className="text-xs px-2.5 py-1 rounded-pill bg-yellow-500/10 text-yellow-500/70 border border-yellow-500/15"
                >
                  {action}
                </span>
              ))}
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
