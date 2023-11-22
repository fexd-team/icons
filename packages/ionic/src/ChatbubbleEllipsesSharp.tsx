import React from 'react'

export default function ChatbubbleEllipsesSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09C54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42s16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9c59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-44.97zM160 288a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm96 0a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/></svg>
  )
}