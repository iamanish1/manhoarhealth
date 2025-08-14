'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

interface FAQAccordionProps {
  categories: FAQCategory[]
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemKey: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemKey)) {
      newOpenItems.delete(itemKey)
    } else {
      newOpenItems.add(itemKey)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <div key={category.title} className="space-y-4">
          <h3 className="font-heading font-bold text-2xl text-brand-900">
            {category.title}
          </h3>
          <div className="space-y-3">
            {category.items.map((item, itemIndex) => {
              const itemKey = `${categoryIndex}-${itemIndex}`
              const isOpen = openItems.has(itemKey)

              return (
                <motion.div
                  key={itemKey}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                  className="card-elevated overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(itemKey)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h4 className="font-heading font-semibold text-lg text-brand-900 pr-4">
                      {item.question}
                    </h4>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-accent-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-accent-600" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-slate-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
