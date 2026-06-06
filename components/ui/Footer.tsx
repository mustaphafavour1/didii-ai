import Link from 'next/link'

const PRODUCT_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features',     href: '#features' },
  { label: 'App screens',  href: '#app-screens' },
  { label: 'Security',     href: '#security' },
]

const COMPANY_LINKS = [
  { label: 'About',   href: '#' },
  { label: 'Blog',    href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: 'mailto:hello@didii.ng' },
]

const LEGAL_LINKS = [
  { label: 'Privacy',     href: '#' },
  { label: 'Terms',       href: '#' },
  { label: 'Compliance',  href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/8">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">

        {/* Brand — centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-500 flex items-center justify-center shadow-glow-yellow-sm">
              <span className="font-display font-bold text-yellow-dark text-lg">d</span>
            </div>
            <span className="font-display font-bold text-cream text-xl">didii</span>
          </div>
          <p className="text-muted text-sm max-w-xs mx-auto leading-relaxed">
            The AI you just talk to about your money. Sharp sharp.
          </p>
        </div>

        {/* Links — horizontal rows separated by dividers */}
        <div className="flex flex-col gap-6 items-center">

          {/* Product links */}
          <div className="flex flex-wrap items-center justify-center gap-1">
            <span className="text-muted/40 text-xs font-semibold uppercase tracking-widest mr-3">Product</span>
            {PRODUCT_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && <span className="text-white/10 mx-2">·</span>}
                <Link href={link.href} className="text-muted text-sm hover:text-cream transition-colors duration-150">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>

          <div className="w-px h-0 border-t border-white/8 w-full max-w-sm" />

          {/* Company links */}
          <div className="flex flex-wrap items-center justify-center gap-1">
            <span className="text-muted/40 text-xs font-semibold uppercase tracking-widest mr-3">Company</span>
            {COMPANY_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && <span className="text-white/10 mx-2">·</span>}
                <Link href={link.href} className="text-muted text-sm hover:text-cream transition-colors duration-150">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>

          <div className="w-px h-0 border-t border-white/8 w-full max-w-sm" />

          {/* Legal links */}
          <div className="flex flex-wrap items-center justify-center gap-1">
            <span className="text-muted/40 text-xs font-semibold uppercase tracking-widest mr-3">Legal</span>
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center">
                {i > 0 && <span className="text-white/10 mx-2">·</span>}
                <Link href={link.href} className="text-muted text-sm hover:text-cream transition-colors duration-150">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col items-center gap-4 text-center">
          <div className="flex gap-5">
            {['Twitter / X', 'Instagram', 'LinkedIn'].map((name) => (
              <Link key={name} href="#" className="text-muted/50 text-xs hover:text-muted transition-colors">
                {name}
              </Link>
            ))}
          </div>
          <p className="text-muted/40 text-xs">
            © {new Date().getFullYear()} didii Technologies Ltd. · Lagos, Nigeria.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            CBN licensed · NDIC insured up to ₦5,000,000.
          </p>
        </div>
      </div>
    </footer>
  )
}
