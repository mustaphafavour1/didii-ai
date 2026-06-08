import Link from 'next/link'

const COLUMNS = [
  {
    heading: 'PRODUCT',
    links: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features',     href: '#features' },
      { label: 'App screens',  href: '#app-screens' },
      { label: 'Security',     href: '#security' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'About',   href: '#' },
      { label: 'Blog',    href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: 'mailto:hello@didii.ng' },
    ],
  },
  {
    heading: 'LEGAL',
    links: [
      { label: 'Privacy',    href: '#' },
      { label: 'Terms',      href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  },
]

const SOCIALS = [
  { label: 'Twitter / X', href: '#' },
  { label: 'Instagram',   href: '#' },
  { label: 'LinkedIn',    href: '#' },
]

export function Footer() {
  return (
    <footer className="relative bg-ink pt-16 pb-10 sm:pt-20 sm:pb-14 overflow-hidden">

      {/* Background watermark — fills full width */}
      <div
        className="absolute inset-x-0 pointer-events-none select-none flex items-center justify-center"
        style={{ top: '50%', transform: 'translateY(calc(-50% + 60px))' }}
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-white/[0.025] whitespace-nowrap leading-none"
          style={{ fontSize: 'clamp(10rem, 26vw, 32rem)' }}
        >
          didii.ai
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">

        {/* Brand + tagline above the card */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-500 flex items-center justify-center">
              <span className="font-display font-bold text-yellow-dark text-lg leading-none">d</span>
            </div>
            <span className="font-display font-bold text-cream text-xl">didii</span>
          </div>
          <p className="text-muted text-sm max-w-[260px] mx-auto leading-relaxed">
            The AI you just talk to about your money. Sharp sharp.
          </p>
        </div>

        {/* Rounded card */}
        <div className="rounded-2xl border border-white/[0.05] bg-white/[0.025] px-7 pt-8 pb-6">

          {/* 3 columns */}
          <div className="grid grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-muted/45 text-[10px] font-semibold tracking-[0.18em] uppercase mb-3">
                  {col.heading}
                </p>
                <div className="h-px bg-white/8 mb-4" />
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-muted/70 text-sm hover:text-cream transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom of card: social + copyright */}
          <div className="mt-8 pt-5 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex gap-5">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="text-muted/45 text-xs hover:text-muted transition-colors duration-150"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <p className="text-muted/35 text-xs text-center sm:text-right leading-relaxed">
              © {new Date().getFullYear()} didii Technologies Ltd.
              {' · '}CBN licensed{' · '}NDIC insured
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
