import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Play, Globe, Apple, ExternalLink, Smartphone, Shield, Users, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The App',
  description: 'Download the Menorah Health app for Android or access our web app. Get confidential chat support, join the Man2Man community, and access self-help tools.',
  openGraph: {
    title: 'The App | Menorah Health',
    description: 'Download the Menorah Health app for Android or access our web app. Get confidential chat support, join the Man2Man community, and access self-help tools.',
  },
}

const features = [
  {
    icon: MessageCircle,
    title: 'Confidential Chat',
    description: 'Connect with trained peer supporters and clinical psychology students for judgment-free conversations.',
  },
  {
    icon: Users,
    title: 'Man2Man Community',
    description: 'Join age-specific groups to connect with other men facing similar challenges.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your conversations and data are protected with enterprise-grade security.',
  },
  {
    icon: Smartphone,
    title: 'Always Accessible',
    description: 'Get support whenever you need it, wherever you are, 24/7.',
  },
]

export default function AppPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 leading-tight">
                  Get the{' '}
                  <span className="text-accent-600">Menorah Health App</span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed">
                  Download our free app and start your journey to better mental health. 
                  Get confidential support, join our community, and access helpful resources.
                </p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.menorahhealth.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download for Android
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  <a 
                    href="https://app.menorahhealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Open Web App
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  disabled
                  className="w-full sm:w-auto opacity-60 cursor-not-allowed"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  iOS App Coming Soon
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  Free Forever
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  No Ads
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                  Privacy Protected
                </span>
              </div>
            </div>

            {/* App Mockup */}
            <div className="relative">
              <div className="relative aspect-[9/16] max-w-sm mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-brand-600 to-accent-500 rounded-3xl shadow-2xl flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold">M</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Menorah Health</h3>
                    <p className="text-sm opacity-90 mb-4">Mental Health Support</p>
                    <div className="space-y-2 text-xs opacity-75">
                      <p>• Confidential Chat Support</p>
                      <p>• Man2Man Community</p>
                      <p>• Self-help Tools</p>
                      <p>• Expert Resources</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-400 rounded-full opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our app provides comprehensive mental health support designed specifically for men, 
              combining technology with human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated group hover:shadow-large transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-brand-900 mb-3 group-hover:text-accent-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="section bg-amber-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-amber-900 mb-4">
              Important Safety Notice
            </h2>
            <p className="text-lg text-amber-800 leading-relaxed">
              Our chat support with clinical psychology students and peer supporters is not a substitute for licensed professional care. 
              If you're experiencing a mental health crisis, please contact emergency services or call the helplines listed in our footer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of men who have already found support through Menorah Health. 
              Download the app today and take the first step towards better mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="group"
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.menorahhealth.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-white text-white hover:bg-white hover:text-brand-900"
              >
                <a 
                  href="https://app.menorahhealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Try Web App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
