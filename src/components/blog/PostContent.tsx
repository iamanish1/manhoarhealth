'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react'

interface Post {
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  readTime: string
  image?: string
}

interface PostContentProps {
  post: Post
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/newsletter"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Newsletter
              </Link>
            </nav>

            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-900 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 text-slate-600 hover:text-accent-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Published on {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors"
                >
                  View All Articles
                  <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
