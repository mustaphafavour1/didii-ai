import { StaggerReveal } from '@/components/StaggerReveal'

const QUOTES = [
  {
    quote: 'Guy, I just tell didii. E don set.',
    sub: 'I no dey even think about am again.',
    name: 'Tolu O.',
    meta: '27 · Lagos Island · Early access',
    color: 'text-yellow-500',
  },
  {
    quote: 'Fastest thing wey happen to my money life.',
    sub: 'All my bills, sorted. One tap.',
    name: 'Amaka C.',
    meta: '31 · Abuja · Beta tester',
    color: 'text-terracotta',
  },
  {
    quote: 'Omo, the snap feature dey do magic.',
    sub: 'I snap invoice, e just pay.',
    name: 'Seun B.',
    meta: '25 · Port Harcourt · Early access',
    color: 'text-lilac',
  },
]

export function Testimonial() {
  return (
    <section className="bg-ink py-24 sm:py-32 overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,184,0,0.04) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Big statement */}
        <StaggerReveal className="text-center mb-16">
          <p className="text-muted text-xs font-semibold tracking-[0.15em] uppercase mb-6">
            WHAT PEOPLE SAY
          </p>
          <p
            className="font-display font-black text-cream/15 leading-none tracking-tighter select-none pointer-events-none"
            style={{ fontSize: 'clamp(5rem, 15vw, 14rem)' }}
            aria-hidden="true"
          >
            &ldquo;E don set.&rdquo;
          </p>
        </StaggerReveal>

        {/* Three quote cards — staggered */}
        <div className="grid sm:grid-cols-3 gap-6 -mt-8 sm:-mt-16">
          {QUOTES.map((q, i) => (
            <StaggerReveal key={q.name} delay={i * 0.12} direction={i === 0 ? 'left' : i === 2 ? 'right' : undefined}>
              <div
                className="relative glass rounded-modal p-7 flex flex-col gap-5 h-full"
                style={{ marginTop: i === 1 ? '2.5rem' : 0 }}
              >
                {/* Big quote mark */}
                <span
                  className={`font-display font-black leading-none select-none ${q.color}`}
                  style={{ fontSize: '3.5rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div className="-mt-4">
                  <blockquote
                    className="font-display font-bold text-cream leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                  >
                    {q.quote}
                  </blockquote>
                  <p className="text-muted text-sm italic">{q.sub}</p>
                </div>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-display text-yellow-dark ${
                    i === 0 ? 'bg-yellow-500' : i === 1 ? 'bg-terracotta' : 'bg-lilac'
                  }`}>
                    {q.name[0]}
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold leading-tight">{q.name}</p>
                    <p className="text-muted text-xs">{q.meta}</p>
                  </div>
                  {/* Stars */}
                  <div className="ml-auto flex gap-0.5" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="11" height="11" viewBox="0 0 14 14" fill="#FFB800" aria-hidden="true">
                        <path d="M7 1l1.545 4.755H13.5l-4.045 2.94 1.545 4.755L7 10.51l-3.999 2.94 1.545-4.755L.5 5.755H5.455L7 1z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerReveal>
          ))}
        </div>

        {/* Social proof */}
        <StaggerReveal delay={0.4} className="mt-14 flex flex-wrap items-center justify-center gap-10">
          {[
            { num: '2,859', label: 'on the waitlist' },
            { num: '4.9★', label: 'avg pilot rating' },
            { num: '<3s', label: 'avg to first payment' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display font-black text-cream" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>{stat.num}</span>
              <span className="text-muted text-xs">{stat.label}</span>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
