import React from 'react'

export default function ToggleOff({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4a4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></g></svg>
  )
}