import React from 'react'

export default function PersonRemoveSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M16 214h144v36H16z" fill="currentColor"/><circle cx="288" cy="144" r="112" fill="currentColor"/><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" fill="currentColor"/></svg>
  )
}