import Image from 'next/image'
import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

export function Security() {
  return (
    <section id="security" className="bg-cream py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">

          {/* Left: full-height shield image */}
          <StaggerReveal>
            <div className="relative h-full min-h-[420px]">
              <Image
                src="/app/security-shield.png"
                alt="Security shield illustration"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle glow beneath */}
              <div
                className="absolute bottom-0 inset-x-0 h-24 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(255,184,0,0.18), transparent 70%)' }}
              />
            </div>
          </StaggerReveal>

          {/* Right: eyebrow + title + body + trust chips */}
          <StaggerReveal delay={0.15} direction="right" className="flex flex-col justify-center">
            <p className="text-yellow-600 text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              BANK-GRADE SECURITY
            </p>
            <h2
              className="font-display font-black text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}
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
