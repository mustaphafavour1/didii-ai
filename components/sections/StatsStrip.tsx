import { StaggerReveal } from '@/components/StaggerReveal'

const STATS = [
  { value: '₦0',   label: 'to start' },
  { value: '1',    label: 'word to confirm' },
  { value: '0',    label: 'menus to learn' },
  { value: '100%', label: 'works in your browser' },
]

export function StatsStrip() {
  return (
    <section className="bg-indigo py-12 sm:py-16 overflow-hidden" aria-label="Key stats">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((stat, i) => (
            <StaggerReveal key={stat.label} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center gap-1">
                <span
                  className="font-display font-black text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}
                >
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm font-medium">{stat.label}</span>
              </div>
            </StaggerReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
