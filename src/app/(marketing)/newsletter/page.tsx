import type { Metadata } from 'next'
import { Calendar, User, ArrowRight } from 'lucide-react'
import NewsletterForm from '@/components/forms/NewsletterForm'

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Stay updated with the latest mental health insights, tips, and news from Menorah Health. Subscribe to our newsletter and read our latest articles.',
  openGraph: {
    title: 'Newsletter | Menorah Health',
    description: 'Stay updated with the latest mental health insights, tips, and news from Menorah Health. Subscribe to our newsletter and read our latest articles.',
  },
}

// Mock newsletter posts - replace with Contentlayer
const newsletterPosts = [
  {
    slug: 'understanding-mens-mental-health',
    title: 'Understanding Men\'s Mental Health: Breaking the Silence',
    excerpt: 'Explore the unique challenges men face when it comes to mental health and how we can create a more supportive environment.',
    author: 'Menorah Health Team',
    date: '2024-01-15',
    tags: ['Mental Health', 'Men\'s Health', 'Awareness'],
    readTime: '5 min read',
  },
  {
    slug: 'building-healthy-relationships',
    title: 'Building Healthy Relationships: A Guide for Men',
    excerpt: 'Learn practical strategies for building and maintaining healthy relationships while prioritizing your mental well-being.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-10',
    tags: ['Relationships', 'Communication', 'Well-being'],
    readTime: '7 min read',
  },
  {
    slug: 'stress-management-techniques',
    title: 'Effective Stress Management Techniques for Busy Men',
    excerpt: 'Discover proven stress management techniques that fit into your busy lifestyle and help you maintain mental balance.',
    author: 'Menorah Health Team',
    date: '2024-01-05',
    tags: ['Stress Management', 'Self-Care', 'Techniques'],
    readTime: '6 min read',
  },
  {
    slug: 'overcoming-stigma',
    title: 'Overcoming the Stigma: Why Men\'s Mental Health Matters',
    excerpt: 'Understanding the societal stigma around men\'s mental health and how we can work together to break these barriers.',
    author: 'Michael Chen',
    date: '2023-12-28',
    tags: ['Stigma', 'Awareness', 'Advocacy'],
    readTime: '8 min read',
  },
  {
    slug: 'work-life-balance',
    title: 'Achieving Work-Life Balance: A Modern Challenge',
    excerpt: 'Practical tips for maintaining a healthy work-life balance in today\'s fast-paced world.',
    author: 'Menorah Health Team',
    date: '2023-12-20',
    tags: ['Work-Life Balance', 'Productivity', 'Well-being'],
    readTime: '6 min read',
  },
  {
    slug: 'mindfulness-for-men',
    title: 'Mindfulness for Men: Simple Practices for Daily Life',
    excerpt: 'Learn how mindfulness can improve your mental health and how to incorporate simple practices into your daily routine.',
    author: 'Dr. Rajesh Kumar',
    date: '2023-12-15',
    tags: ['Mindfulness', 'Meditation', 'Daily Practices'],
    readTime: '5 min read',
  },
]

export default function NewsletterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-6">
              Newsletter & Insights
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Stay updated with the latest mental health insights, tips, and news from Menorah Health. 
              Subscribe to our newsletter and never miss our latest articles.
            </p>
            
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Newsletter Posts */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our latest articles on men&apos;s mental health, well-being, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletterPosts.map((post) => (
              <article
                key={post.slug}
                className="card-elevated group hover:shadow-large transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-brand-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-xs">{post.readTime}</span>
                  </div>

                  <a
                    href={`/newsletter/${post.slug}`}
                    className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Want to contribute to our newsletter?
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
