import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Founder\'s Note',
  description: 'A personal message from Jayden John Jacob, Founder & CEO of Menorah Health, about our mission to support men\'s mental health.',
  openGraph: {
    title: 'Founder\'s Note | Menorah Health',
    description: 'A personal message from Jayden John Jacob, Founder & CEO of Menorah Health, about our mission to support men\'s mental health.',
  },
}

export default function FoundersNotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Founder's Note
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              A personal message from our founder about the journey to create Menorah Health.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Cover Image Placeholder */}
            <div className="mb-12">
              <div className="aspect-video bg-gradient-to-br from-brand-600 to-accent-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold">M</span>
                  </div>
                  <h2 className="text-3xl font-semibold mb-2">Menorah Health</h2>
                  <p className="text-lg opacity-90">Founder's Vision</p>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <p className="text-lg text-slate-600 italic">
                  "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
                </p>
                <p className="text-sm text-slate-500 mt-2">— Noam Shpancer</p>
              </div>

              <p>
                When I first conceived the idea for Menorah Health, I was driven by a simple yet powerful observation: 
                men around the world were struggling with their mental health in silence, often because they didn't 
                know where to turn or felt that seeking help was somehow a sign of weakness.
              </p>

              <p>
                Growing up, I witnessed friends, family members, and colleagues battle with depression, anxiety, 
                and other mental health challenges. Many of them suffered in silence, believing that they had to 
                "tough it out" or that their struggles weren't valid enough to warrant professional help. 
                This cultural stigma around men's mental health was not just harmful—it was deadly.
              </p>

              <p>
                The statistics are sobering: men are less likely to seek help for mental health issues, more likely 
                to die by suicide, and often face unique barriers when trying to access mental health support. 
                Traditional mental health services, while valuable, often don't address the specific needs and 
                communication styles that many men prefer.
              </p>

              <p>
                That's why I created Menorah Health—the world's first free mental health app exclusively for men. 
                Our platform is designed to break down the barriers that prevent men from seeking help, providing 
                a safe, accessible, and stigma-free space where every man can find the support he needs.
              </p>

              <h2>Our Approach</h2>
              <p>
                Menorah Health combines technology with human connection to create a comprehensive mental health 
                support system. We offer confidential chat support with trained peer supporters and clinical 
                psychology students, age-specific community groups, self-help tools, and expert-curated resources.
              </p>

              <p>
                What makes us different is our focus on creating a platform that speaks to men's unique needs. 
                We understand that many men prefer peer support, practical tools, and community connection over 
                traditional therapy approaches. Our age-specific groups (15-18, 19-24, 25-35) ensure that users 
                connect with others facing similar life challenges.
              </p>

              <h2>The Power of Community</h2>
              <p>
                One of the most powerful aspects of Menorah Health is our community. When men connect with others 
                who understand their struggles, something remarkable happens—they realize they're not alone. 
                They find strength in shared experiences, hope in others' recovery stories, and practical advice 
                from those who have walked similar paths.
              </p>

              <p>
                Our peer supporters and clinical psychology students provide compassionate, judgment-free support 
                that helps men feel heard and understood. While they're not licensed mental health professionals, 
                they offer valuable emotional support, practical coping strategies, and guidance on when to seek 
                professional help.
              </p>

              <h2>Accessibility and Innovation</h2>
              <p>
                We believe that mental health support should be accessible to everyone, regardless of their 
                financial situation. That's why Menorah Health is completely free—no hidden fees, no premium 
                tiers, no barriers to access. We're committed to keeping it that way.
              </p>

              <p>
                Our platform is designed to be user-friendly and accessible across devices. Whether you prefer 
                our mobile app or web platform, you can access support whenever and wherever you need it. 
                We're constantly innovating and improving our services based on user feedback and the latest 
                research in men's mental health.
              </p>

              <h2>Looking Forward</h2>
              <p>
                As we continue to grow and serve more men around the world, our mission remains clear: to create 
                a world where men feel empowered to prioritize their mental health, where seeking help is seen 
                as a sign of strength, and where no man has to face his struggles alone.
              </p>

              <p>
                We're just getting started. With plans to expand our services, develop new features, and reach 
                more men in need, we're committed to being at the forefront of digital mental health innovation. 
                But our core mission will never change—supporting men's mental health through technology, 
                community, and human connection.
              </p>

              <p>
                To every man who has ever felt alone in their struggles, to every man who has hesitated to seek 
                help, to every man who has been told to "man up" when they needed support—this platform is for you. 
                You are not alone, your feelings are valid, and it's okay to ask for help.
              </p>

              <p>
                Thank you for being part of this journey. Together, we're building a healthier, more supportive 
                world for men's mental health.
              </p>

              {/* Signature */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-brand-900 text-lg">Jayden John Jacob</p>
                    <p className="text-slate-600">Founder & CEO</p>
                    <p className="text-slate-600">Menorah Health</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">
                      {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 bg-accent-50 border border-accent-200 rounded-lg p-8 text-center">
                <h3 className="font-heading font-semibold text-xl text-brand-900 mb-4">
                  Join Our Mission
                </h3>
                <p className="text-slate-700 mb-6">
                  Ready to take the first step towards better mental health? Download our app and join thousands 
                  of men who have already found support through Menorah Health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/the-app"
                    className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
                  >
                    Get the App
                  </a>
                  <a
                    href="/about-us"
                    className="inline-flex items-center px-6 py-3 border border-accent-500 text-accent-600 font-medium rounded-lg hover:bg-accent-50 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
