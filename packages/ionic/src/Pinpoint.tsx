import React from 'react'

export default function Pinpoint({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm135.8 359.8c-32.5 32.5-74.6 51.9-119.8 55.6l-8-63.4h-16l-7.9 63.3c-45.3-3.7-87.4-23.1-119.8-55.6-32.5-32.5-51.9-74.6-55.6-119.8L128 264v-16l-63.3-7.9c3.7-45.3 23.1-87.4 55.6-119.8 32.5-32.5 74.6-51.9 119.8-55.6L248 128h16l7.9-63.3c45.3 3.7 87.4 23.1 119.8 55.6 32.5 32.5 51.9 74.6 55.6 119.8L384 248v16l63.3 7.9c-3.7 45.3-23.1 87.4-55.5 119.9z" fill="currentColor"/></svg>
  )
}