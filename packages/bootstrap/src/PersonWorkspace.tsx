import React from 'react'

export default function PersonWorkspace({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M4 16s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1H4zm4-5.95a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z"/><path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2z"/></g></svg>
  )
}