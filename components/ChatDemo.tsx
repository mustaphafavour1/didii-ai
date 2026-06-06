'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TypeItOut } from './TypeItOut'

// ─── Conversation sequences ───────────────────────────────────────────────
const SEQUENCES = [
  {
    user:   'abeg send 20k to mama',
    ai:     'Send ₦20,000 to Mama — GTBank 0123456789. I do am?',
    toast:  '✓ Sent to Mama · ₦20,000',
    nudge:  '🔔 Bills due Friday · ₦13,500',
  },
  {
    user:   'buy MTN 5gb data for 08034567890',
    ai:     'Top up MTN 5GB for 080····7890 — ₦2,000. I do am?',
    toast:  '✓ 5GB sent on MTN',
    nudge:  '💡 Same number topped up last week too.',
  },
  {
    user:   'pay my DSTV subscription',
    ai:     'Pay DSTV Compact · IUC 7012345678 · ₦13,500. Oya?',
    toast:  '✓ DSTV paid · ₦13,500',
    nudge:  '📅 Next due: 6 Jul',
  },
]

// ─── Phase progression ────────────────────────────────────────────────────
type Phase =
  | 'idle'
  | 'user-typing'
  | 'ai-thinking'
  | 'ai-typing'
  | 'actions'
  | 'confirming'
  | 'toast'
  | 'nudge'
  | 'fading'

export function ChatDemo() {
  const [phase,   setPhase]   = useState<Phase>('idle')
  const [seqIdx,  setSeqIdx]  = useState(0)
  const [userDone, setUserDone] = useState(false)
  const [aiDone,   setAiDone]  = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const seq = SEQUENCES[seqIdx]

  const sched = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms)
    timersRef.current.push(id)
  }

  // Clear all pending timers
  const clear = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  // Reset for next sequence
  function reset(nextIdx: number) {
    setPhase('idle')
    setUserDone(false)
    setAiDone(false)
    sched(() => {
      setSeqIdx(nextIdx)
      sched(() => setPhase('user-typing'), 500)
    }, 100)
  }

  // Kick off on mount
  useEffect(() => {
    sched(() => setPhase('user-typing'), 800)
    return clear
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Phase progression driven by completions
  useEffect(() => {
    if (phase === 'user-typing' && userDone) {
      sched(() => setPhase('ai-thinking'), 300)
    }
  }, [phase, userDone])

  useEffect(() => {
    if (phase === 'ai-thinking') {
      sched(() => setPhase('ai-typing'), 950)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'ai-typing' && aiDone) {
      sched(() => setPhase('actions'), 200)
    }
  }, [phase, aiDone])

  useEffect(() => {
    if (phase === 'actions') {
      sched(() => setPhase('confirming'), 2000)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'confirming') {
      sched(() => setPhase('toast'), 600)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'toast') {
      sched(() => setPhase('nudge'), 800)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'nudge') {
      sched(() => setPhase('fading'), 2400)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'fading') {
      sched(() => {
        const next = (seqIdx + 1) % SEQUENCES.length
        reset(next)
      }, 700)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const showUser      = ['user-typing','ai-thinking','ai-typing','actions','confirming','toast','nudge'].includes(phase)
  const showThinking  = phase === 'ai-thinking'
  const showAI        = ['ai-typing','actions','confirming','toast','nudge'].includes(phase)
  const showActions   = ['actions','confirming'].includes(phase)
  const confirmingBtn = phase === 'confirming'
  const showToast     = ['toast','nudge'].includes(phase)
  const showNudge     = phase === 'nudge'

  return (
    <div className="relative w-full max-w-[340px] mx-auto select-none" aria-hidden="true">
      {/* Phone shell */}
      <div className="relative rounded-[32px] border border-white/10 bg-ink overflow-hidden shadow-card-dark"
           style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.5)' }}>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
          <span className="text-white/40 text-[10px] font-medium">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-[6px] rounded-sm border border-white/30">
              <div className="w-2/3 h-full bg-white/50 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-white/8">
          <div className="w-7 h-7 rounded-full bg-indigo flex items-center justify-center text-white text-xs font-bold font-display">d</div>
          <div>
            <div className="text-cream text-sm font-semibold leading-tight">didii</div>
            <div className="text-muted text-[10px]">AI money assistant</div>
          </div>
        </div>

        {/* Chat area */}
        <div className="min-h-[260px] px-4 py-4 flex flex-col gap-3">
          <AnimatePresence>
            {/* User message */}
            {showUser && (
              <motion.div
                key={`user-${seqIdx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex justify-end"
              >
                <div className="bg-indigo text-white text-sm rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[80%] leading-snug">
                  <TypeItOut
                    text={seq.user}
                    trigger={phase !== 'idle'}
                    onComplete={() => setUserDone(true)}
                  />
                </div>
              </motion.div>
            )}

            {/* AI thinking */}
            {showThinking && (
              <motion.div
                key="thinking"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-end gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-lilac/20 border border-lilac/30 flex items-center justify-center text-lilac text-[9px] font-bold font-display flex-shrink-0">d</div>
                <div className="glass rounded-2xl rounded-bl-sm px-3.5 py-3 flex gap-1 items-center">
                  <span className="typing-dot bg-lilac" />
                  <span className="typing-dot bg-lilac" />
                  <span className="typing-dot bg-lilac" />
                </div>
              </motion.div>
            )}

            {/* AI response */}
            {showAI && (
              <motion.div
                key={`ai-${seqIdx}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex items-end gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-lilac/20 border border-lilac/30 flex items-center justify-center text-lilac text-[9px] font-bold font-display flex-shrink-0">d</div>
                <div className="glass rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm text-cream leading-snug max-w-[80%]">
                  <TypeItOut
                    text={seq.ai}
                    trigger={phase === 'ai-typing' || showActions || confirmingBtn || showToast || showNudge}
                    onComplete={() => setAiDone(true)}
                  />
                </div>
              </motion.div>
            )}

            {/* Action buttons */}
            {showActions && (
              <motion.div
                key="actions"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex gap-2 pl-8"
              >
                <button
                  className={`text-xs font-semibold px-3 py-1.5 rounded-pill transition-all duration-150 ${
                    confirmingBtn
                      ? 'bg-terracotta text-white scale-95 shadow-glow-terracotta'
                      : 'bg-indigo text-white hover:bg-indigo-600'
                  }`}
                >
                  Oya, send it
                </button>
                <button className="text-xs font-medium px-3 py-1.5 rounded-pill text-muted border border-white/10 hover:bg-white/5">
                  Change
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toast + nudge area */}
        <div className="px-4 pb-4 flex flex-col gap-2 min-h-[60px]">
          <AnimatePresence>
            {showToast && (
              <motion.div
                key={`toast-${seqIdx}`}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="glass rounded-xl px-3.5 py-2.5 flex items-center gap-2.5"
              >
                <span className="text-base">✓</span>
                <span className="text-cream text-xs font-semibold">{seq.toast}</span>
              </motion.div>
            )}
            {showNudge && (
              <motion.div
                key={`nudge-${seqIdx}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-lilac/10 border border-lilac/20 rounded-xl px-3.5 py-2 flex items-center gap-2"
              >
                <span className="text-sm">{seq.nudge.split(' ')[0]}</span>
                <span className="text-lilac text-[11px]">{seq.nudge.slice(2)}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom input bar */}
        <div className="px-4 pb-4">
          <div className="glass rounded-pill px-4 py-2.5 flex items-center gap-2">
            <span className="text-muted text-sm flex-1 truncate">
              {phase === 'idle' ? 'Type anything...' : phase === 'user-typing' ? '' : 'E don set.'}
            </span>
            <button className="w-6 h-6 rounded-full bg-indigo flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5H9M5 1L9 5L5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
