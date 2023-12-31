import React from 'react'

export default function ArrowLeft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`exd-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 6L2 16l8 10M2 16h28"/></g></svg>
  )
}