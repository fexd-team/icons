import React from 'react'

export default function Ipod({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 311c-17.7 0-32 14.3-32 32 0 17.6 14.3 32 32 32 17.6 0 32-14.3 32-32s-14.3-32-32-32z" fill="currentColor"/><path d="M340.4 64H171.6C156.4 64 144 76.2 144 91.7v328.7c0 15.5 12.4 27.7 27.6 27.7h168.8c15.2 0 27.6-12.2 27.6-27.7V91.7c0-15.5-12.4-27.7-27.6-27.7zm-84.3 352.1c-39.8 0-72.1-32.2-72.1-72 0-39.7 32.3-72 72.1-72 39.7 0 71.9 32.3 71.9 72 0 39.8-32.2 72-71.9 72zm79.8-189.3c-.8 7.6-7 13.2-14.7 13.2h-131c-8.2 0-14.2-6.2-14.2-14.6V110.9c0-7.5 5-13.7 12-14.9h135.8c6.5 1.2 11.5 6.6 12.2 13.3l-.1 117.5z" fill="currentColor"/></svg>
  )
}