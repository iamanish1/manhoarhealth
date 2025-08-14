'use client'

import { ExternalLink } from 'lucide-react'

export default function SafetyBanner() {
  return (
    <div className="w-full bg-amber-50 border-b border-amber-200 text-amber-900 text-sm">
      <div className="container py-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex-1">
            <span className="font-medium">Not for emergencies.</span>{' '}
            If you or someone is in crisis in India, call{' '}
            <a 
              href="https://telemanas.mohfw.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium underline hover:text-amber-700 transition-colors"
            >
              Tele-MANAS 14416 or 1-800-891-4416
            </a>
            , or{' '}
            <a 
              href="https://pib.gov.in/PressReleasePage.aspx?PRID=1653869" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium underline hover:text-amber-700 transition-colors"
            >
              KIRAN 1800-599-0019
            </a>
            . Help is available 24/7.
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="https://telemanas.mohfw.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium underline hover:text-amber-700 transition-colors"
            >
              Learn more
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
