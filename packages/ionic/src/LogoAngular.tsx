import React from 'react'

export default function LogoAngular({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M213.57 256h84.85l-42.43-89.36L213.57 256z" fill="currentColor"/><path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z" fill="currentColor"/></svg>
  )
}