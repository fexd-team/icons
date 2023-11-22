import React from 'react'

export default function IceCream2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M128 256l128 224 128-224z" fill="currentColor"/><path d="M402.5 172.6c-.8-.4-1.5-.8-2.3-1.3-4.4-2.8-8.4-8.5-8.7-12.7l.1-.7c3.2-9 5-19.2 5-29.8 0-53.1-43-96.1-96.1-96.1-31.4 0-59.2 15-76.8 38.3 0 0-9.1 14-10.8 29 0 0 1.1-19.4 4.2-31.5-7.4-2.5-15.4-3.8-23.6-3.8-41.7 0-75.6 33.8-75.6 75.6 0 6.4.8 12.6 2.3 18.5 0 .4-.1.7-.2 1-.9 5.1-4 9.5-8.4 12.3-.7.5-1.5.9-2.2 1.3-8.2 5-13.5 13.6-13.5 23.4 0 15.4 13.5 28 29.9 28H386c16.4 0 29.8-12.5 29.8-28 .2-9.8-5.2-18.5-13.3-23.5z" fill="currentColor"/></svg>
  )
}