import { FunHeadline } from '@/components/FunHeadline'
import { StaggerReveal } from '@/components/StaggerReveal'

const BANKS = [
  { name: 'Opay',       bg: '#00C853', text: '#fff' },
  { name: 'GTBank',     bg: '#E4003C', text: '#fff' },
  { name: 'Access',     bg: '#002244', text: '#fff' },
  { name: 'Kuda',       bg: '#400090', text: '#fff' },
  { name: 'First Bank', bg: '#003366', text: '#fff' },
  { name: 'UBA',        bg: '#B11116', text: '#fff' },
  { name: 'Zenith',     bg: '#D01C1F', text: '#fff' },
  { name: 'Palmpay',    bg: '#06BA8C', text: '#fff' },
  { name: 'Fidelity',   bg: '#00563B', text: '#fff' },
  { name: 'Sterling',   bg: '#ED1C24', text: '#fff' },
  { name: 'Wema',       bg: '#672E8E', text: '#fff' },
  { name: 'Polaris',    bg: '#E31E24', text: '#fff' },
]

export function NoSwitching() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <StaggerReveal>
            <p className="text-terracotta text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              NO SWITCHING REQUIRED
            </p>
            <FunHeadline
              as="h2"
              className="font-display font-black text-ink leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.25rem)' }}
            >
              Keep your Opay. Keep your GTBank.
            </FunHeadline>
            <p className="text-ink/55 text-base leading-relaxed max-w-md">
              didii works on top of the accounts you already have. No new bank account required.
              Just connect your existing wallet or bank and talk your money into existence.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 items-center">
              <span className="text-ink/40 text-sm italic">
                Works with all Nigerian banks and fintechs —
              </span>
              <span className="text-indigo text-sm font-semibold">and more coming.</span>
            </div>
          </StaggerReveal>

          {/* Right — bank chips */}
          <StaggerReveal delay={0.15} direction="right">
            <div className="flex flex-wrap gap-2.5">
              {BANKS.map((bank) => (
                <div
                  key={bank.name}
                  className="flex items-center gap-2 rounded-pill px-3.5 py-2 text-xs font-semibold"
                  style={{ backgroundColor: bank.bg, color: bank.text }}
                >
                  {/* First letter avatar */}
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold leading-none">
                    {bank.name[0]}
                  </span>
                  {bank.name}
                </div>
              ))}
              <div className="flex items-center rounded-pill px-3.5 py-2 text-xs font-medium border-2 border-dashed border-muted/40 text-muted/70 italic">
                and all Nigerian banks
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
