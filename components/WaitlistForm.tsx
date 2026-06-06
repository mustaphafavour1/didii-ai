'use client'

import { FormEvent, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email,   setEmail]   = useState('')
  const [status,  setStatus]  = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res  = await fetch('/api/waitlist', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? 'Something went wrong.')
      } else {
        setStatus('success')
        setMessage(data.message ?? 'E don set!')
        setEmail('')
      }
    } catch {
      setStatus('error')
      setMessage('Network error — try again.')
    }
  }

  const inputBase =
    'flex-1 min-w-0 rounded-pill px-5 py-3 text-sm focus:outline-none transition-all duration-150'

  const inputClasses = dark
    ? `${inputBase} bg-white/8 border border-white/12 text-cream placeholder:text-muted focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/40`
    : `${inputBase} bg-cream border border-ink/12 text-ink placeholder:text-muted focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/40`

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-yellow-500/15 border border-yellow-500/30"
      >
        <span className="text-2xl">🎉</span>
        <p className={`text-sm font-medium ${dark ? 'text-cream' : 'text-ink'}`}>{message}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
          className={inputClasses}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !email.trim()}
          className="rounded-pill px-6 py-3 bg-yellow-500 text-yellow-dark text-sm font-bold hover:bg-yellow-400 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <span className="typing-dot bg-white" />
              <span className="typing-dot bg-white" />
              <span className="typing-dot bg-white" />
            </span>
          ) : (
            'Join the waitlist →'
          )}
        </button>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-terracotta text-xs"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
