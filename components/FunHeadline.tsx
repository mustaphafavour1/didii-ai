import React, { type CSSProperties } from 'react'

/**
 * FunHeadline — applies the didii brand "fun letter" treatment to a display headline.
 *
 * Rule (consistent, rhythmic, not random):
 *   For every word with ≥ 3 characters, find the LAST vowel and render it
 *   in terracotta + italic + heavier variable weight.
 *
 * Skips common stop-words and punctuation-only tokens.
 */

const SKIP_WORDS = new Set([
  'a', 'an', 'the', 'in', 'on', 'at', 'to', 'by', 'or', 'and',
  'it', 'is', 'be', 'do', 'as', 'of', 'up', 'so', 'no', 'go',
])

function findLastVowelIndex(word: string): number {
  for (let i = word.length - 1; i >= 0; i--) {
    if (/[aeiouAEIOU]/.test(word[i])) return i
  }
  return -1
}

interface FunHeadlineProps {
  children: string
  className?: string
  style?: CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
}

export function FunHeadline({ children, className, style, as: Tag = 'span' }: FunHeadlineProps) {
  const tokens = children.split(/(\s+)/)

  const rendered = tokens.map((token, ti) => {
    // Keep whitespace tokens as-is
    if (/^\s+$/.test(token)) return <React.Fragment key={ti}>{token}</React.Fragment>

    // Strip trailing punctuation to get the bare word for analysis
    const bare  = token.replace(/[^a-zA-Z0-9]/g, '')
    const lower = bare.toLowerCase()

    const shouldTreat =
      bare.length >= 3 &&
      !SKIP_WORDS.has(lower)

    if (!shouldTreat) {
      return <React.Fragment key={ti}>{token}</React.Fragment>
    }

    const vowelIdx = findLastVowelIndex(token)
    if (vowelIdx === -1) {
      return <React.Fragment key={ti}>{token}</React.Fragment>
    }

    return (
      <React.Fragment key={ti}>
        {token.slice(0, vowelIdx)}
        <span className="fun-letter" aria-hidden="false">
          {token[vowelIdx]}
        </span>
        {token.slice(vowelIdx + 1)}
      </React.Fragment>
    )
  })

  return <Tag className={className} style={style}>{rendered}</Tag>
}
