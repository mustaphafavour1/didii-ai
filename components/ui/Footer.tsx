import Link from 'next/link'

const LINKS = {
  Product: [
    { label: 'Features',       href: '#features' },
    { label: 'How it works',   href: '#how-it-works' },
    { label: 'App screens',    href: '#app-screens' },
    { label: 'Browser widget', href: '#try-it' },
    { label: 'Security',       href: '#security' },
  ],
  Company: [
    { label: 'About',    href: '#' },
    { label: 'Blog',     href: '#' },
    { label: 'Careers',  href: '#' },
    { label: 'Contact',  href: 'mailto:hello@didii.ng' },
    { label: 'Press',    href: '#' },
  ],
  Legal: [
    { label: 'Privacy policy',    href: '#' },
    { label: 'Terms of service',  href: '#' },
    { label: 'Cookie policy',     href: '#' },
    { label: 'Compliance',        href: '#' },
  ],
}

const TRUST_CHIPS = [
  '🏦 Anchor Partner Bank',
  '🔒 256-bit encryption',
  '🛡️ NDIC-insured deposits',
  '✅ CBN licensed',
]

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/8">
      {/* Trust strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-wrap gap-4 items-center">
          {TRUST_CHIPS.map((chip) => (
            <span
              key={chip}
              className="text-muted text-xs flex items-center gap-1.5"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-indigo flex items-center justify-center">
                <span className="font-display font-bold text-white text-base">d</span>
              </div>
              <span className="font-display font-bold text-cream text-lg">didii</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-[200px]">
              The AI you just talk to about your money. Sharp sharp.
            </p>
            <p className="text-muted/60 text-xs mt-4">
              © {new Date().getFullYear()} didii Technologies Ltd.
              <br />
              Lagos, Nigeria.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-cream text-xs font-semibold uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-cream transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-xs">
            didii is a product of didii Technologies Ltd. Licensed by the Central Bank of Nigeria.
            Deposits insured by the NDIC up to ₦5,000,000.
          </p>
          <div className="flex gap-4">
            {['Twitter / X', 'Instagram', 'LinkedIn'].map((name) => (
              <Link
                key={name}
                href="#"
                className="text-muted/60 text-xs hover:text-muted transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
