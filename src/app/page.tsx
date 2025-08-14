import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import NewsletterSignup from '@/components/sections/NewsletterSignup'

export const metadata: Metadata = {
  title: 'The World\'s First Free Mental Health App for Men',
  description: 'Get confidential chat support, join the Man2Man community, and access self-help tools designed specifically for men\'s mental health.',
  openGraph: {
    title: 'Menorah Health - The World\'s First Free Mental Health App for Men',
    description: 'Get confidential chat support, join the Man2Man community, and access self-help tools designed specifically for men\'s mental health.',
    url: 'https://menorahhealth.com',
    siteName: 'Menorah Health',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Menorah Health - Mental Health Support for Men',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menorah Health - The World\'s First Free Mental Health App for Men',
    description: 'Get confidential chat support, join the Man2Man community, and access self-help tools designed specifically for men\'s mental health.',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <NewsletterSignup />
    </>
  )
}
