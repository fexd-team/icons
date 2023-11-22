import React from 'react'

export default function Telephone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12c0-7 7-7 13-7s13 0 13 7c0 8-7-1-7-1H10s-7 9-7 1zm8 2s-5 5-5 14h20c0-9-5-14-5-14H11z"/><circle cx="16" cy="21" r="4"/></g></svg>
  )
}