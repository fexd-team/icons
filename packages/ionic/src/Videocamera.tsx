import React from 'react'

export default function Videocamera({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M367 185.3c0-5.1-4-9.3-9.2-9.3H306v-32.2c0-35.2-29.3-63.8-64.9-63.8H63v48h176.1c4.5 0 9.9 5.6 9.9 10.1V176H41.4c-5.2 0-9.4 4.2-9.4 9.3V422.7c0 5.1 4.2 9.3 9.4 9.3h316.4c5.2 0 9.2-4.2 9.2-9.3v-64.5l113 34.7V216.5l-113 34.7v-65.9zM258.2 341H140.1c-19.8 0-35.9-16-35.9-35.8s16.1-35.8 35.9-35.8c19.8 0 35.9 16.2 35.9 36 0 10-4.2 18.6-10.8 25.6h67.9c-6.6-7-10.8-15.6-10.8-25.6 0-19.8 16.1-35.9 35.9-35.9 19.8 0 35.9 15.9 35.9 35.7S278 341 258.2 341z" fill="currentColor"/></svg>
  )
}