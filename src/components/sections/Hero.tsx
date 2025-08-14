'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Play, Globe, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-accent-50">
      <div className="container section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-900 leading-tight"
              >
                The World's First{' '}
                <span className="text-accent-600">Free Mental Health App</span>{' '}
                for Men
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                Get confidential chat support, join the Man2Man community, and access 
                self-help tools designed specifically for men's mental health.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-sm text-slate-600"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                Free
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                Confidential
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                Peer + Trainee Psychologist Chats
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                Resources
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
                  Get on Google Play
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group"
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
            </motion.div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600"
            >
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
              iOS App Coming Soon
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Placeholder for app mockup */}
              <div className="w-full h-full bg-gradient-to-br from-brand-600 to-accent-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Menorah Health</h3>
                  <p className="text-sm opacity-90">Mental Health Support</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-400 rounded-full opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  )
}
