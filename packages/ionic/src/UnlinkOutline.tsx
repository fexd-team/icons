import React from 'react'

export default function UnlinkOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M208 352h-64a96 96 0 0 1 0-192h64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36"/><path d="M304 160h64a96 96 0 0 1 0 192h-64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36"/></svg>
  )
}