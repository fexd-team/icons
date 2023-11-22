import React from 'react'

export default function SocialHtml5Outline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 32l34.936 403.301L255.769 480l157.245-44.705L448 32H64zm319.041 378.51l-127.262 36.187-126.867-36.169L98.896 64H413.1l-30.059 346.51z" fill="currentColor"/><path d="M147.991 264h166.993l-5.573 63.986-53.42 14.748-53.766-14.67L198.801 289H150.55l6.763 77.336 98.678 27.81 98.495-27.983L367.991 215h-176L188 164h183.991l4.208-49.684-240.778-.128z" fill="currentColor"/></svg>
  )
}