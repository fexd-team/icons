import React from 'react'

export default function Jet({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M314.8 368.5L419 403l-3-52.7L302 247S276.1 73.3 273.8 54.7C268.5 14.4 255.9 0 255.9 0s-12.5 14.4-17.6 54.6C235.9 73.3 210 247 210 247L96 350.3 93 403l104.2-34.5 1.4 12.3-52.7 58.3 18.3 27.4 73.3-9.1 18.3 54.6 18.5-54.6 73.4 9.1 18.3-27.4-52.7-58.3 1.5-12.3z" fill="currentColor"/></svg>
  )
}