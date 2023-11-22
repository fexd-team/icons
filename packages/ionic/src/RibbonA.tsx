import React from 'react'

export default function RibbonA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M352 32l-82.9 176.612c39.996 3.608 75.273 23.554 99.096 53.128L432 128l-80-96z" fill="currentColor"/><path d="M160 32l82.9 176.612c-39.996 3.608-75.273 23.554-99.096 53.128L80 128l80-96z" fill="currentColor"/><path d="M269.092 32H176l52.572 112h54.856L336 32z" fill="currentColor"/><path d="M256 224c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zm0 224c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z" fill="currentColor"/><path d="M256 264c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z" fill="currentColor"/></svg>
  )
}