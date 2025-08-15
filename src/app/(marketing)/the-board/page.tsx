import type { Metadata } from 'next'
import { Linkedin, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Board',
  description: 'Meet the leadership team behind Menorah Health - Jayden John Jacob (Founder & CEO), Ihzan Mohammad (COO), and Raghav Datta (Chief Innovation Officer).',
  openGraph: {
    title: 'The Board | Menorah Health',
    description: 'Meet the leadership team behind Menorah Health - Jayden John Jacob (Founder & CEO), Ihzan Mohammad (COO), and Raghav Datta (Chief Innovation Officer).',
  },
}

const teamMembers = [
  {
    name: 'Jayden John Jacob',
    title: 'Founder & CEO',
    bio: 'Jayden is passionate about breaking down mental health barriers for men. With a background in technology and mental health advocacy, he founded Menorah Health to create a safe, accessible platform where men can find the support they need.',
    longBio: 'Jayden John Jacob is the visionary founder of Menorah Health, driven by a deep commitment to addressing the mental health crisis among men. With over a decade of experience in technology and mental health advocacy, Jayden recognized the urgent need for a platform that specifically addresses the unique challenges men face when seeking mental health support. His personal experiences and professional background have shaped Menorah Health\'s mission to provide free, accessible, and stigma-free mental health resources for men worldwide.',
    image: '/team/jayden.jpg', // Placeholder
  },
  {
    name: 'Ihzan Mohammad',
    title: 'Chief Operating Officer',
    bio: 'Ihzan brings extensive operational expertise to Menorah Health, ensuring our platform runs smoothly and efficiently to serve our growing community of users.',
    longBio: 'Ihzan Mohammad serves as the Chief Operating Officer at Menorah Health, where he oversees all operational aspects of the platform. With a strong background in business operations and technology management, Ihzan ensures that Menorah Health delivers exceptional user experiences while maintaining the highest standards of security and privacy. His strategic approach to operations has been instrumental in scaling the platform to serve thousands of men seeking mental health support.',
    image: '/team/ihzan.jpg', // Placeholder
  },
  {
    name: 'Raghav Datta',
    title: 'Chief Innovation Officer',
    bio: 'Raghav leads our innovation efforts, developing cutting-edge features and technologies to enhance the mental health support experience for our users.',
    longBio: 'Raghav Datta is the Chief Innovation Officer at Menorah Health, responsible for driving technological innovation and product development. With expertise in artificial intelligence, user experience design, and mental health technology, Raghav ensures that Menorah Health remains at the forefront of digital mental health solutions. His innovative approach has led to the development of advanced features that make mental health support more accessible, personalized, and effective for men.',
    image: '/team/raghav.jpg', // Placeholder
  },
]

export default function BoardPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Meet Our Leadership Team
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              The passionate individuals behind Menorah Health who are dedicated to transforming 
              men&apos;s mental health support through technology and human connection.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-elevated group hover:shadow-large transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="aspect-square bg-gradient-to-br from-brand-600 to-accent-500 rounded-2xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <p className="text-sm opacity-90">Photo Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-brand-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent-600 font-medium">
                      {member.title}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3 pt-4">
                    <button className="p-2 text-slate-400 hover:text-accent-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-accent-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                We envision a world where men feel empowered to prioritize their mental health, 
                where seeking help is seen as a sign of strength, and where no man has to face his struggles alone.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our leadership team is committed to expanding Menorah Health&apos;s reach, developing innovative features, 
                and building partnerships that will make mental health support accessible to men everywhere. 
                Together, we&apos;re working towards a future where mental health care is as normal and accessible as physical health care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
