import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tapiwa Jairos Biza | Computing Student & Developer',
  description: "Portfolio of Tapiwa Jairos Biza - Computing student at University of Greenwich, web developer, IT support specialist. Showcasing projects in web development, database design, and problem-solving.",
  keywords: ['Tapiwa Biza', 'web developer', 'computing student', 'University of Greenwich', 'IT support', 'JavaScript', 'HTML', 'CSS', 'SQL', 'portfolio'],
  authors: [{ name: 'Tapiwa Jairos Biza' }],
  creator: 'Tapiwa Jairos Biza',
  publisher: 'Tapiwa Jairos Biza',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://martruther-dev.vercel.app',
    title: 'Tapiwa Jairos Biza | Portfolio',
    description: "Computing student & developer portfolio showcasing projects in web development, IT support, and database management.",
    siteName: 'Tapiwa Biza Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tapiwa Jairos Biza | Portfolio',
    description: 'Computing student & developer portfolio',
  },
  verification: {
    google: 'google-site-verification-code',
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-dark-900">
        {children}
      </body>
    </html>
  )
}