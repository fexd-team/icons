import React from 'react'

export default function CircleCheck({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`exd-icon ${className}`}><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm14.664-3.247a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159l4.586-5.16a1 1 0 0 1 1.411-.082z" fill="currentColor"/></g></svg>
  )
}