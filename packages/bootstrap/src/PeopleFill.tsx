import React from 'react'

export default function PeopleFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1H7zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/><path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/><path d="M4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z"/></g></svg>
  )
}