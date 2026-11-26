import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tapiwa Jairos Biza | Computing Student & Developer',
  description:
    'Portfolio of Tapiwa Jairos Biza - Computing student at the University of Greenwich, web developer, and IT support specialist. Showcasing projects in web development, database design, and problem-solving.',
  keywords: [
    'Tapiwa Biza',
    'web developer',
    'computing student',
    'University of Greenwich',
    'IT support',
    'JavaScript',
    'HTML',
    'CSS',
    'SQL',
    'portfolio',
  ],
  authors: [{ name: 'Tapiwa Jairos Biza' }],
  creator: 'Tapiwa Jairos Biza',
  publisher: 'Tapiwa Jairos Biza',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Tapiwa Jairos Biza | Portfolio',
    description:
      'Computing student and developer portfolio showcasing projects in web development, IT support, and database management.',
    siteName: 'Tapiwa Biza Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tapiwa Jairos Biza | Portfolio',
    description: 'Computing student and developer portfolio',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-white font-sans text-dark-900">{children}</body>
    </html>
  )
}
