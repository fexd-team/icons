import React from 'react'

export default function IosToday({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M388 32H124c-33.1 0-60 26.9-60 60v328c0 33.1 26.9 60 60 60h264c33.1 0 60-26.9 60-60V92c0-33.1-26.9-60-60-60zm32 388c0 17.6-14.4 32-32 32H124c-17.6 0-32-14.4-32-32V92c0-17.6 14.4-32 32-32h264c17.6 0 32 14.4 32 32v328z" fill="currentColor"/><path d="M360 176H152c-13.2 0-24 10.8-24 24v192c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24V200c0-13.2-10.8-24-24-24z" fill="currentColor"/><path d="M142 124h100c7.7 0 14-6.3 14-14s-6.3-14-14-14H142c-7.7 0-14 6.3-14 14s6.3 14 14 14z" fill="currentColor"/></svg>
  )
}