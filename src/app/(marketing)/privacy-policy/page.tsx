import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Menorah Health collects, uses, and protects your personal information in compliance with the Digital Personal Data Protection Act, 2023.',
  openGraph: {
    title: 'Privacy Policy | Menorah Health',
    description: 'Learn how Menorah Health collects, uses, and protects your personal information in compliance with the Digital Personal Data Protection Act, 2023.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
              <p className="text-amber-900 text-sm mt-2">
                This Privacy Policy complies with the Digital Personal Data Protection Act, 2023 (DPDP Act).
              </p>
            </div>

            <h2 id="introduction">1. Introduction</h2>
            <p>
              Menorah Health (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our mental health support platform, including our mobile application and website.
            </p>
            <p>
              We are committed to complying with the Digital Personal Data Protection Act, 2023 (DPDP Act) and other 
              applicable data protection laws in India.
            </p>

            <h2 id="lawful-basis">2. Lawful Basis and Consent</h2>
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-6">
              <h3 className="text-brand-900 font-semibold mb-3">Legal Basis for Processing:</h3>
              <ul className="text-brand-800 space-y-2">
                <li><strong>Consent:</strong> We process your data based on your explicit consent</li>
                <li><strong>Legitimate Interest:</strong> To provide and improve our mental health services</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Vital Interest:</strong> To protect your health and safety in emergency situations</li>
              </ul>
            </div>
            <p>
              By using our services, you provide explicit consent for us to collect and process your personal 
              information as described in this Privacy Policy. You may withdraw your consent at any time by 
              contacting us or deleting your account.
            </p>

            <h2 id="information-collected">3. Information We Collect</h2>
            <h3>3.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Age and demographic information</li>
              <li>Account credentials and profile information</li>
              <li>Communication preferences</li>
            </ul>

            <h3>3.2 Usage Information</h3>
            <p>We automatically collect certain information when you use our services:</p>
            <ul>
              <li>Device information (device type, operating system, browser)</li>
              <li>Usage patterns and app interactions</li>
              <li>IP address and location data (general location only)</li>
              <li>Log files and analytics data</li>
            </ul>

            <h3>3.3 Sensitive Information</h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <p className="text-amber-900 font-semibold mb-2">Special Protection:</p>
              <p className="text-amber-800">
                We may collect sensitive personal information related to your mental health and well-being. 
                This information is protected with enhanced security measures and is only used to provide 
                you with appropriate support and resources.
              </p>
            </div>

            <h2 id="how-we-use">4. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li>Provide and maintain our mental health support services</li>
              <li>Connect you with appropriate peer supporters and resources</li>
              <li>Personalize your experience and content</li>
              <li>Send important updates and notifications</li>
              <li>Improve our services and develop new features</li>
              <li>Ensure platform security and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 id="data-retention">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <ul>
              <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion</li>
              <li><strong>Chat Logs:</strong> Retained for 90 days for quality assurance and safety purposes</li>
              <li><strong>Analytics Data:</strong> Retained for 2 years in anonymized form</li>
              <li><strong>Legal Records:</strong> Retained as required by applicable laws</li>
            </ul>

            <h2 id="children-data">6. Children&apos;s Data Protection</h2>
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-6">
              <h3 className="text-brand-900 font-semibold mb-3">Special Protections for Minors:</h3>
              <ul className="text-brand-800 space-y-2">
                <li>We do not knowingly collect personal information from children under 12 years old</li>
                <li>Users aged 12-18 require explicit guardian consent</li>
                <li>Enhanced privacy controls for minor users</li>
                <li>Limited data collection and processing for minors</li>
                <li>Guardian access to account information for users under 18</li>
              </ul>
            </div>

            <h2 id="user-rights">7. Your Rights Under DPDP Act</h2>
            <p>Under the Digital Personal Data Protection Act, 2023, you have the following rights:</p>
            
            <h3>7.1 Right to Access</h3>
            <p>
              You have the right to access and obtain a copy of your personal information that we hold.
            </p>

            <h3>7.2 Right to Correction</h3>
            <p>
              You can request correction of inaccurate or incomplete personal information.
            </p>

            <h3>7.3 Right to Erasure</h3>
            <p>
              You have the right to request deletion of your personal information, subject to certain legal exceptions.
            </p>

            <h3>7.4 Right to Nomination</h3>
            <p>
              You can nominate another individual to exercise your rights in the event of your death or incapacity.
            </p>

            <h3>7.5 Right to Withdraw Consent</h3>
            <p>
              You can withdraw your consent for data processing at any time.
            </p>

            <h3>7.6 Right to Grievance Redressal</h3>
            <p>
              You have the right to file a complaint with our Grievance Officer or the Data Protection Board.
            </p>

            <h2 id="data-security">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul>
              <li>End-to-end encryption for sensitive communications</li>
              <li>Secure data centers with physical and digital security</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection and privacy</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 id="data-sharing">9. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Emergency Situations:</strong> In emergency situations to protect your health and safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly consent to sharing</li>
            </ul>

            <h2 id="cross-border">10. Cross-Border Data Transfers</h2>
            <p>
              Your personal information is primarily stored and processed in India. If we need to transfer 
              your data outside India, we ensure adequate protection measures are in place as required by the DPDP Act.
            </p>

            <h2 id="cookies">11. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
              and improve our services. You can control cookie settings through your browser preferences.
            </p>

            <h2 id="grievance-officer">12. Grievance Officer</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-6">
              <h3 className="text-slate-900 font-semibold mb-3">Contact Our Grievance Officer:</h3>
              <p className="text-slate-800">
                <strong>Email:</strong>{' '}
                <a href="mailto:Menorahenquiries@gmail.com" className="text-accent-600 hover:text-accent-700">
                  Menorahenquiries@gmail.com
                </a>
              </p>
              <p className="text-slate-800">
                <strong>Response Time:</strong> We will respond to your grievance within 30 days.
              </p>
            </div>

            <h2 id="changes">13. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy on our platform and updating the &ldquo;Last updated&rdquo; date.
            </p>

            <h2 id="contact">14. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong>{' '}
                <a href="mailto:Menorahenquiries@gmail.com" className="text-accent-600 hover:text-accent-700">
                  Menorahenquiries@gmail.com
                </a>
              </li>
              <li><strong>Address:</strong> India</li>
            </ul>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-8">
              <p className="text-slate-700 text-sm">
                <strong>Note:</strong> This Privacy Policy is designed to comply with the Digital Personal Data 
                Protection Act, 2023. If you have concerns about our data practices, you may also contact the 
                Data Protection Board of India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
