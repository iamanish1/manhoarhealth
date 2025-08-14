import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Menorah Health team. We\'re here to help with any questions about our mental health app and services.',
  openGraph: {
    title: 'Contact Us | Menorah Health',
    description: 'Get in touch with the Menorah Health team. We\'re here to help with any questions about our mental health app and services.',
  },
}

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have questions about Menorah Health? We're here to help. 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  We're here to support you. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-brand-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-slate-600 mb-2">
                      For general inquiries and support
                    </p>
                    <a 
                      href="mailto:hello@menorahhealth.com" 
                      className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                    >
                      hello@menorahhealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-brand-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-slate-600 mb-2">
                      For urgent matters and technical support
                    </p>
                    <a 
                      href="tel:+919876543210" 
                      className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-brand-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-slate-600 mb-2">
                      Based in India, serving men worldwide
                    </p>
                    <p className="text-slate-600">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-heading font-semibold text-lg text-brand-900 mb-4">
                  Response Time
                </h3>
                <p className="text-slate-600">
                  We typically respond to emails within 24 hours and phone calls within 2 hours during business hours (IST).
                </p>
                              </div>
              </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
