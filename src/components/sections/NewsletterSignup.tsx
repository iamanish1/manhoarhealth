'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')

    try {
      // TODO: Replace with actual newsletter signup API
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setMessage('Thank you for subscribing! Check your email for confirmation.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="section bg-gradient-to-br from-brand-50 to-accent-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-900 mb-4">
            Stay Connected
          </h2>
          
          <p className="text-xl text-slate-600 mb-8">
            Get the latest mental health insights, tips, and updates from our team. 
            Join thousands of men on their journey to better mental health.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 form-input"
                disabled={status === 'loading'}
              />
              <Button
                type="submit"
                variant="primary"
                disabled={status === 'loading'}
                className="sm:w-auto"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 text-sm ${
                  status === 'success' ? 'text-success-600' : 'text-danger-600'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertCircle className="w-4 h-4" />
                )}
                {message}
              </motion.div>
            )}

            <p className="text-xs text-slate-500">
              By subscribing, you agree to our{' '}
              <a href="/privacy-policy" className="underline hover:text-slate-700">
                Privacy Policy
              </a>
              . You can unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
