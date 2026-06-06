import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'
import { WaitlistForm } from '@/components/WaitlistForm'

export function FinalCTA() {
  return (
    <section id="waitlist" className="bg-ink py-24 sm:py-32 relative overflow-hidden">
      {/* Aurora glows */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(75,61,245,0.18) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 inset-x-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(185,168,255,0.1) 0%, transparent 70%)' }} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">

        <StaggerReveal>
          <p className="text-indigo text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            JOIN THE WAITLIST
          </p>
          <FunHeadline
            as="h2"
            className="font-display font-black text-cream leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Smarter banking. Just by typing.
          </FunHeadline>
          <p className="text-muted text-base leading-relaxed mb-10">
            Be first when didii opens up. Takes 60 seconds.
            No credit card, no account number, no wahala.
          </p>

          {/* Waitlist form */}
          <div className="mb-6 max-w-md mx-auto">
            <WaitlistForm dark />
          </div>

          <p className="text-muted/50 text-xs">
            2,859 Nigerians already waiting · We'll reach you sharp sharp
          </p>
        </StaggerReveal>

        {/* Feature micro-list */}
        <StaggerReveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              '✓ Free to join',
              '✓ First access when we launch',
              '✓ No spam — ever',
            ].map((item) => (
              <span key={item} className="text-muted/60 text-xs">{item}</span>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
