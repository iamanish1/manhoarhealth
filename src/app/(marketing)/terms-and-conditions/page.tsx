import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read our terms and conditions for using Menorah Health services. Learn about age requirements, user responsibilities, and service limitations.',
  openGraph: {
    title: 'Terms & Conditions | Menorah Health',
    description: 'Read our terms and conditions for using Menorah Health services. Learn about age requirements, user responsibilities, and service limitations.',
  },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Please read these terms and conditions carefully before using Menorah Health services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <p className="text-amber-900 font-medium">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Menorah Health&apos;s services, including our mobile application and website, 
              you accept and agree to be bound by the terms and provision of this agreement. If you do not 
              agree to abide by the above, please do not use this service.
            </p>

            <h2 id="age-requirements">2. Age Requirements and Guardian Consent</h2>
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-6">
              <h3 className="text-brand-900 font-semibold mb-3">Important Age Requirements:</h3>
              <ul className="text-brand-800 space-y-2">
                <li><strong>Minimum Age:</strong> You must be at least 12 years old to use Menorah Health services.</li>
                <li><strong>Guardian Consent Required:</strong> If you are between 12 and 18 years old, you must have explicit consent from your parent or legal guardian to use our services.</li>
                <li><strong>Adult Users:</strong> Users 18 years and older can use our services independently.</li>
              </ul>
            </div>
            <p>
              Menorah Health is committed to protecting the privacy and safety of all users, especially minors. 
              We require guardian consent for users under 18 to ensure appropriate oversight and support.
            </p>

            <h2 id="service-description">3. Service Description</h2>
            <p>
              Menorah Health provides a free mental health support platform exclusively for men, including:
            </p>
            <ul>
              <li>Confidential chat support with trained peer supporters and clinical psychology students</li>
              <li>Age-specific community groups (15-18, 19-24, 25-35)</li>
              <li>Self-help tools and resources</li>
              <li>Expert-curated mental health content</li>
            </ul>

            <h2 id="limitations">4. Service Limitations and Disclaimers</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <h3 className="text-amber-900 font-semibold mb-3">Important Disclaimers:</h3>
              <ul className="text-amber-800 space-y-2">
                <li>Our services are <strong>not a substitute for professional medical or mental health care</strong>.</li>
                <li>Chat supporters are not licensed mental health professionals.</li>
                <li>We do not provide emergency services or crisis intervention.</li>
                <li>For mental health emergencies, contact emergency services immediately.</li>
              </ul>
            </div>

            <h2 id="user-responsibilities">5. User Responsibilities</h2>
            <p>As a user of Menorah Health, you agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Respect the privacy and dignity of other users</li>
              <li>Not use our services for harmful or illegal purposes</li>
              <li>Not share personal information of other users</li>
              <li>Report any concerning behavior or content</li>
              <li>Seek professional help when needed</li>
            </ul>

            <h2 id="privacy">6. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. We collect, use, and protect your personal information 
              in accordance with our Privacy Policy and applicable data protection laws, including 
              the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
            <p>
              By using our services, you consent to the collection and use of your information as 
              described in our Privacy Policy.
            </p>

            <h2 id="intellectual-property">7. Intellectual Property</h2>
            <p>
              All content, features, and functionality of Menorah Health, including but not limited 
              to text, graphics, logos, and software, are owned by Menorah Health and are protected 
              by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 id="limitation-of-liability">8. Limitation of Liability</h2>
            <p>
              Menorah Health shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your use of our services.
            </p>

            <h2 id="termination">9. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice 
              or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 id="changes">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 id="governing-law">11. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of India, without regard to 
              its conflict of law provisions.
            </p>

            <h2 id="contact">12. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:{' '}
              <a href="mailto:Menorahenquiries@gmail.com" className="text-accent-600 hover:text-accent-700">
                Menorahenquiries@gmail.com
              </a>
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
              <p className="text-slate-700 text-sm">
                <strong>Note:</strong> These terms and conditions are subject to change. Please review them 
                periodically for updates. Your continued use of Menorah Health services after any changes 
                constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
