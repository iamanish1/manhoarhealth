import type { Metadata } from 'next'
import { MessageCircle, Users, Wrench, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Menorah Health\'s mission to provide free mental health support exclusively for men through confidential chat, community, and self-help tools.',
  openGraph: {
    title: 'About Us | Menorah Health',
    description: 'Learn about Menorah Health\'s mission to provide free mental health support exclusively for men through confidential chat, community, and self-help tools.',
  },
}

const offerings = [
  {
    icon: MessageCircle,
    title: 'Confidential Chat Support',
    description: 'Connect with trained peer supporters and clinical psychology students for confidential, judgment-free conversations about your mental health.',
  },
  {
    icon: Users,
    title: 'Man2Man Age Groups',
    description: 'Join age-specific communities (15-18, 19-24, 25-35) to connect with other men facing similar challenges and build meaningful relationships.',
  },
  {
    icon: Wrench,
    title: 'Self-help Tools',
    description: 'Access practical tools, exercises, and evidence-based techniques to manage stress, anxiety, and improve your overall mental well-being.',
  },
  {
    icon: BookOpen,
    title: 'Expert Insights & Media',
    description: 'Learn from mental health professionals through articles, videos, and resources specifically curated for men\'s mental health needs.',
  },
]

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              About Menorah Health
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're on a mission to break down the barriers preventing men from seeking mental health support. 
              Our free platform provides a safe, accessible, and stigma-free space where every man can find the help he needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To break down the barriers preventing men from seeking mental health support by providing 
                a free, accessible, and stigma-free platform where every man can find the help he needs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that mental health is just as important as physical health, and that seeking help 
                is a sign of strength, not weakness. Our platform is designed specifically for men, 
                addressing the unique challenges and societal pressures they face.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-600 to-accent-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Menorah Health</h3>
                  <p className="text-lg opacity-90">Supporting Men's Mental Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive platform combines technology with human connection to provide 
              the support men need to prioritize their mental health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="card-elevated group hover:shadow-large transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <offering.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-brand-900 mb-3 group-hover:text-accent-600 transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience we provide to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessibility',
                description: 'We believe mental health support should be free and available to every man who needs it.',
              },
              {
                title: 'Confidentiality',
                description: 'Your privacy and trust are paramount. All conversations and data are kept strictly confidential.',
              },
              {
                title: 'Community',
                description: 'We foster a supportive environment where men can connect, share, and grow together.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent-600">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-brand-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
