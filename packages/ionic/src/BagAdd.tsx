import React from 'react'

export default function BagAdd({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M454.66 169.4A31.86 31.86 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55a69.48 69.48 0 0 0 21.52-50.2V192a31.78 31.78 0 0 0-9.34-22.6zM320 336h-48v48a16 16 0 0 1-32 0v-48h-48a16 16 0 0 1 0-32h48v-48a16 16 0 0 1 32 0v48h48a16 16 0 0 1 0 32zm16-176H176v-16a80 80 0 0 1 160 0z" fill="currentColor"/></svg>
  )
}