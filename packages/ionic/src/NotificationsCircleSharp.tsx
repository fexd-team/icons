import React from 'react'

export default function NotificationsCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M295.68 351.43v.57h.32z" fill="currentColor"/><path d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32z" fill="none"/><path d="M295.67 352h.33l-.32-.57c0 .19-.01.38-.01.57z" fill="none"/><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32zm112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36z" fill="currentColor"/></svg>
  )
}