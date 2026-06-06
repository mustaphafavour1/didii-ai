'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function StaggerReveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  distance = 22,
  once = true,
}: StaggerRevealProps) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px 0px' })

  const offsets = {
    up:    { y: distance,  x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { y: 0, x: distance  },
    right: { y: 0, x: -distance },
    none:  { y: 0, x: 0 },
  }

  const variants = {
    hidden:  { opacity: 0, ...offsets[direction] },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Stagger a list of children with sequential delays */
export function StaggerList({
  children,
  className,
  staggerDelay = 0.08,
  baseDelay = 0,
  direction = 'up',
}: {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  baseDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <StaggerReveal key={i} delay={baseDelay + i * staggerDelay} direction={direction}>
          {child}
        </StaggerReveal>
      ))}
    </div>
  )
}
