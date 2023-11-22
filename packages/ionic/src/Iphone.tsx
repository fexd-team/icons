import React from 'react'

export default function Iphone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M328.2 64H183.8C170.7 64 160 74.7 160 87.9v336.3c0 13.1 10.7 23.8 23.8 23.8h144.3c13.1 0 23.8-10.7 23.8-23.8V87.9C352 74.7 341.3 64 328.2 64zM240 99.9c0-2.1 1.7-3.9 3.9-3.9h24.3c2.1 0 3.9 1.7 3.9 3.9v.3c0 2.1-1.7 3.9-3.9 3.9h-24.3c-2.1 0-3.9-1.7-3.9-3.9v-.3zM228 96c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm28 336.1c-8.9 0-16.1-7.2-16.1-16.1 0-8.9 7.2-16.1 16.1-16.1 8.9 0 16.1 7.2 16.1 16.1 0 8.9-7.3 16.1-16.1 16.1zm80-48.1H176V128h160v256z" fill="currentColor"/></svg>
  )
}