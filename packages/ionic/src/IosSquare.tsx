import React from 'react'

export default function IosSquare({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M388 416H124c-15.4 0-28-12.6-28-28V124c0-15.4 12.6-28 28-28h264c15.4 0 28 12.6 28 28v264c0 15.4-12.6 28-28 28z" fill="currentColor"/></svg>
  )
}