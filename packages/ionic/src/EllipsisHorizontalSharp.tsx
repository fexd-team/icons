import React from 'react'

export default function EllipsisHorizontalSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><circle cx="256" cy="256" r="48" fill="currentColor"/><circle cx="416" cy="256" r="48" fill="currentColor"/><circle cx="96" cy="256" r="48" fill="currentColor"/></svg>
  )
}