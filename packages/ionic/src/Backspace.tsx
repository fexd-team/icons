import React from 'react'

export default function Backspace({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M403.13 96H156.87a44.9 44.9 0 0 0-33.68 15.27a15.88 15.88 0 0 0-1.91 2.7L32 247.75a16 16 0 0 0 0 16.5l89.15 133.57a16.24 16.24 0 0 0 2 2.88a44.89 44.89 0 0 0 33.7 15.3h246.28A44.92 44.92 0 0 0 448 371.13V140.87A44.92 44.92 0 0 0 403.13 96zM348 311a16 16 0 1 1-22.63 22.62L271.67 280L218 333.65A16 16 0 0 1 195.35 311L249 257.33l-53.69-53.69A16 16 0 0 1 218 181l53.69 53.7l53.67-53.7A16 16 0 0 1 348 203.64l-53.7 53.69z" fill="currentColor"/></svg>
  )
}