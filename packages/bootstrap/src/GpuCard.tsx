import React from 'react'

export default function GpuCard({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M4 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0zm7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3z"/><path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5zm5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM9 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0z"/><path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"/></g></svg>
  )
}