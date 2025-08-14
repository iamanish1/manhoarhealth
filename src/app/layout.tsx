import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import SafetyBanner from '@/components/site/SafetyBanner'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ['latin'], 
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://menorahhealth.com'),
  title: { 
    default: 'Menorah Health - The World\'s First Free Mental Health App for Men', 
    template: '%s | Menorah Health' 
  },
  description: 'The world\'s first free mental health app exclusively for men. Get confidential chat support, join the Man2Man community, and access self-help tools.',
  keywords: ['mental health', 'men', 'free', 'app', 'chat support', 'community', 'self-help'],
  authors: [{ name: 'Menorah Health' }],
  creator: 'Menorah Health',
  publisher: 'Menorah Health',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://menorahhealth.com',
    siteName: 'Menorah Health',
    title: 'Menorah Health - The World\'s First Free Mental Health App for Men',
    description: 'The world\'s first free mental health app exclusively for men. Get confidential chat support, join the Man2Man community, and access self-help tools.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Menorah Health - Mental Health Support for Men',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menorah Health - The World\'s First Free Mental Health App for Men',
    description: 'The world\'s first free mental health app exclusively for men. Get confidential chat support, join the Man2Man community, and access self-help tools.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <SafetyBanner />
        <Header />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
