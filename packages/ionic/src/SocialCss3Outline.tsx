import React from 'react'

export default function SocialCss3Outline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M354.676 366.898l-98.608 28.125-98.458-28.248L150.864 289h48.253l3.433 39.563 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z" fill="currentColor"/><path d="M64 32l34.936 403.301L255.769 480l157.245-44.705L448 32H64zm319.041 378.51l-127.262 36.187-126.867-36.169L98.896 64H413.1l-30.059 346.51z" fill="currentColor"/></svg>
  )
}