import React from 'react'

export default function Fire({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`exd-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 30c-15 0 0-17-3-27 16 10 20 27 3 27zm2 0c-7 0 0-10 0-10s7 10 0 10z"/></g></svg>
  )
}