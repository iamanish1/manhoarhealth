import type { Metadata } from 'next'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Find answers to frequently asked questions about Menorah Health, our mental health app, and how we support men\'s mental well-being.',
  openGraph: {
    title: 'FAQs | Menorah Health',
    description: 'Find answers to frequently asked questions about Menorah Health, our mental health app, and how we support men\'s mental well-being.',
  },
}

const faqCategories = [
  {
    title: 'General',
    items: [
      {
        question: 'What is Menorah Health?',
        answer: 'Menorah Health is a free mental health app designed specifically for men. We provide confidential chat support, community groups, self-help tools, and expert insights to help men prioritize their mental well-being.',
      },
      {
        question: 'Who can use Menorah Health?',
        answer: 'Menorah Health is designed for men aged 15 and above. Users between 12-18 years old need guardian consent to use our services. We welcome men from all backgrounds and experiences.',
      },
      {
        question: 'Is Menorah Health really free?',
        answer: 'Yes, Menorah Health is completely free to use. We believe mental health support should be accessible to everyone, regardless of their financial situation.',
      },
      {
        question: 'How is Menorah Health different from other mental health apps?',
        answer: 'Menorah Health is specifically designed for men, addressing the unique challenges and stigma men face when seeking mental health support. We combine technology with human connection through peer support and community groups.',
      },
    ],
  },
  {
    title: 'App & Features',
    items: [
      {
        question: 'How do I get started with the app?',
        answer: 'Download the app from Google Play Store or access our web app. Create an account, complete a brief assessment, and you\'ll be connected to our community and support resources.',
      },
      {
        question: 'What features are available in the app?',
        answer: 'Our app includes confidential chat support, age-specific community groups (15-18, 19-24, 25-35), self-help tools and exercises, expert articles and videos, and crisis resources.',
      },
      {
        question: 'How do the community groups work?',
        answer: 'Community groups are age-specific spaces where men can connect with others facing similar challenges. Groups are moderated by trained peer supporters and provide a safe environment for sharing and support.',
      },
      {
        question: 'Can I use the app anonymously?',
        answer: 'Yes, you can use most features anonymously. However, some community features may require a username for better interaction. We never share your personal information without your consent.',
      },
    ],
  },
  {
    title: 'Safety & Privacy',
    items: [
      {
        question: 'Is my information safe and private?',
        answer: 'Yes, we take your privacy very seriously. All conversations are confidential and encrypted. We follow strict data protection guidelines and never share your information without your explicit consent.',
      },
      {
        question: 'What if I\'m in a mental health crisis?',
        answer: 'If you&apos;re experiencing a crisis, please contact emergency services immediately. Our app is not a substitute for emergency care. You can also call Tele-MANAS (14416) or KIRAN (1800-599-0019) for crisis support.',
      },
      {
        question: 'Are the peer supporters qualified?',
        answer: 'Our peer supporters are trained volunteers and clinical psychology students who receive ongoing training and supervision. They provide emotional support but are not a substitute for professional therapy.',
      },
      {
        question: 'How do you handle data protection?',
        answer: 'We comply with India&apos;s DPDP Act, 2023 and implement industry-standard security measures. Your data is encrypted, stored securely, and we have strict access controls in place.',
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Find answers to common questions about Menorah Health, our mental health app, 
              and how we support men&apos;s mental well-being.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion categories={faqCategories} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Can&apos;t find what you&apos;re looking for? Our team is here to help. 
              Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqCategories.flatMap(category =>
              category.items.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              }))
            ),
          }),
        }}
      />
    </>
  )
}
