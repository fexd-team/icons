import React from 'react'

export default function CompassFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276a7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439L4.11 12.39l4.95-2.828l2.828-4.95z"/></g></svg>
  )
}