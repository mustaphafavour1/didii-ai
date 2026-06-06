import Link from 'next/link'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

export function TryIt() {
  return (
    <section id="try-it" className="bg-indigo py-24 sm:py-32 relative overflow-hidden">
      {/* bg pattern */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(185,168,255,0.2) 0%, transparent 65%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">

        <StaggerReveal>
          <p className="text-white/60 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
            TRY IT NOW
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-white leading-tight tracking-tight mx-auto mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            The whole thing, right inside your browser.
          </FunHeadline>
          <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto mb-10">
            This is the live prototype — onboarding, chat, wallet, card, the lot.
            Money moves are simulated. Real didii vibes, no real naira moving yet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#waitlist"
              className="rounded-pill px-8 py-3.5 bg-white text-indigo text-sm font-bold hover:bg-cream active:scale-95 transition-all duration-150 shadow-lg"
            >
              Open the full app →
            </Link>
            <Link
              href="#waitlist"
              className="rounded-pill px-6 py-3.5 border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Get early access
            </Link>
          </div>
        </StaggerReveal>

        {/* Widget mockup pill */}
        <StaggerReveal delay={0.2} className="mt-16">
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4 mx-auto">
            <div className="w-8 h-8 rounded-xl bg-indigo border border-white/20 flex items-center justify-center shadow-glow-indigo">
              <span className="font-display font-bold text-white text-sm">d</span>
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">didii browser widget</p>
              <p className="text-white/50 text-xs">Summon on any website · Chrome &amp; Firefox</p>
            </div>
            <div className="ml-4 hidden sm:flex gap-2">
              {['Send', 'Pay', 'Cash out'].map((action) => (
                <span key={action}
                      className="text-xs px-2.5 py-1 rounded-pill bg-white/10 text-white/70 border border-white/10">
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
