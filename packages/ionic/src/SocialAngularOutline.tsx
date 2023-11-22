import React from 'react'

export default function SocialAngularOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M255.982 64l187.967 69.105-39.17 230.389-148.881 79.949-148.812-80.051L68.031 133.11 255.982 64m-.001-32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32z" fill="currentColor"/><path d="M344 352h40L256 72 128 352h40l26.584-56h122.827L344 352zm-130.427-96l42.419-89.356L298.419 256h-84.846z" fill="currentColor"/></svg>
  )
}