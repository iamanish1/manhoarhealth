'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, Wrench, BookOpen } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Confidential Chat Support',
    description: 'Connect with trained peer supporters and clinical psychology students for confidential, judgment-free conversations about your mental health.',
  },
  {
    icon: Users,
    title: 'Man2Man Community',
    description: 'Join age-specific groups (15-18, 19-24, 25-35) to connect with other men facing similar challenges and build meaningful relationships.',
  },
  {
    icon: Wrench,
    title: 'Self-help Tools & Tips',
    description: 'Access practical tools, exercises, and evidence-based techniques to manage stress, anxiety, and improve your overall mental well-being.',
  },
  {
    icon: BookOpen,
    title: 'Expert Insights & Media',
    description: 'Learn from mental health professionals through articles, videos, and resources specifically curated for men\'s mental health needs.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-brand-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive mental health support designed specifically for men, 
            combining technology with human connection to create a safe space for healing and growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="card-elevated bg-gradient-to-br from-brand-50 to-brand-100 border-brand-200">
            <h3 className="font-heading font-bold text-2xl text-brand-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-700 leading-relaxed">
              To break down the barriers preventing men from seeking mental health support by providing 
              a free, accessible, and stigma-free platform where every man can find the help he needs.
            </p>
          </div>

          <div className="card-elevated bg-gradient-to-br from-accent-50 to-accent-100 border-accent-200">
            <h3 className="font-heading font-bold text-2xl text-brand-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A world where men feel empowered to prioritize their mental health, where seeking help 
              is seen as a sign of strength, and where no man has to face his struggles alone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
