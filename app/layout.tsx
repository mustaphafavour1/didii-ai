import type { Metadata, Viewport } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'didii — Smarter banking. Just by typing.',
  description:
    'The AI you just talk to about your money. Send money, pay your light, buy data, cash out crypto — in the app or right inside your browser.',
  keywords: ['fintech Nigeria', 'AI banking', 'money app Nigeria', 'digital banking', 'send money Nigeria'],
  openGraph: {
    title: 'didii — Smarter banking. Just by typing.',
    description: 'The AI you just talk to about your money. Works in Pidgin, Yoruba, Hausa, Igbo, English.',
    siteName: 'didii',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'didii — Smarter banking. Just by typing.',
    description: 'The AI you just talk to about your money.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#0F1108',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={hanken.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
