import React from 'react'

export default function IosSkipbackwardOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96zm79.6 160l7.6-4.4L400 124v264L183.1 260.4l-7.5-4.4zM112 112h47v288h-47V112z" fill="currentColor"/></svg>
  )
}