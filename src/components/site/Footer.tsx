import Link from 'next/link'
import { ExternalLink, Mail, Phone } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'The Board', href: '/the-board' },
    { name: 'The App', href: '/the-app' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Founder\'s Note', href: '/founders-note-1' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
  legal: [
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
  social: [
    {
      name: 'Email',
      href: 'mailto:Menorahenquiries@gmail.com',
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-heading font-bold text-xl">
                  Menorah Health
                </span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                The world&apos;s first free mental health app exclusively for men. 
                Get confidential chat support, join the Man2Man community, and access self-help tools.
              </p>
              <div className="flex items-center space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-accent-400 transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-accent-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-accent-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Crisis Helpline Section */}
        <div className="border-t border-slate-800 py-6">
          <div className="text-center">
            <h3 className="font-heading font-semibold text-lg mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-slate-300 mb-4">
              If you or someone is in crisis in India, these helplines are available 24/7:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a
                href="https://telemanas.mohfw.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Tele-MANAS: 14416 or 1-800-891-4416
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://pib.gov.in/PressReleasePage.aspx?PRID=1653869"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                KIRAN: 1800-599-0019
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Menorah Health. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Made with ❤️ for men&apos;s mental health
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
