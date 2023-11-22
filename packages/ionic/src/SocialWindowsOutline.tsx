import React from 'react'

export default function SocialWindowsOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M464 281v180.5l-216-31.3V281h216m16-16H232v179l248 36V265z" fill="currentColor"/><path d="M200 281v142.2l-152-22V281h152m16-16H32v150l184 26.7V265z" fill="currentColor"/><path d="M464 50v183H248V81.3l216-30.9M480 32L232 67.4V249h248V32z" fill="currentColor"/><path d="M200 88v145H48V109.9l152-21.7m16-18.5L32 96v153h184V69.7z" fill="currentColor"/></svg>
  )
}