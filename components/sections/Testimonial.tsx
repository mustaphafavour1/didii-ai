import { StaggerReveal } from '@/components/StaggerReveal'

export function Testimonial() {
  return (
    <section className="bg-cream py-24 sm:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">

        <StaggerReveal>
          {/* Quote mark */}
          <div className="text-indigo font-display font-black text-7xl leading-none mb-4 select-none"
               aria-hidden="true">&ldquo;</div>

          <blockquote className="font-display font-bold text-ink leading-tight tracking-tight mb-8"
                      style={{ fontSize: 'clamp(1.5rem, 4vw, 2.6rem)' }}>
            Guy, I just tell didii.{' '}
            <span className="text-terracotta italic">E don set.</span>
            {' '}I no dey even think about am again.
          </blockquote>

          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-indigo/20 overflow-hidden bg-indigo/10 flex items-center justify-center">
              {/* Placeholder avatar */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="10" r="5" fill="#4B3DF5" opacity="0.4"/>
                <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="#4B3DF5" opacity="0.25"/>
              </svg>
            </div>
            <div>
              <p className="text-ink font-semibold text-sm">Tolu O.</p>
              <p className="text-muted text-xs">27 · Lagos Island · Early access user</p>
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mt-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#E2613C" aria-hidden="true">
                  <path d="M7 1l1.545 4.755H13.5l-4.045 2.94 1.545 4.755L7 10.51l-3.999 2.94 1.545-4.755L.5 5.755H5.455L7 1z"/>
                </svg>
              ))}
            </div>
          </div>
        </StaggerReveal>

        {/* Social proof row */}
        <StaggerReveal delay={0.2} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { num: '2,859', label: 'on the waitlist' },
              { num: '4.9★', label: 'avg pilot rating' },
              { num: '<3s', label: 'avg to first payment' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5">
                <span className="font-display font-black text-ink text-xl">{stat.num}</span>
                <span className="text-muted text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
