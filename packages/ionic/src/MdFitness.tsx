import React from 'react'

export default function MdFitness({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M434.3 315.5l29.7-29.7-29.7-29.8-74.3 74.3L181.7 152 256 77.7 226.3 48l-29.7 29.7L166.8 48l-44.5 44.5-29.8-29.7-29.7 29.7 29.7 29.7L48 166.8l29.7 29.7L48 226.3 77.7 256l74.3-74.3L330.3 360 256 434.3l29.7 29.7 29.7-29.7 29.7 29.7 44.5-44.5 29.7 29.7 29.7-29.7-29.7-29.7 44.5-44.5-29.5-29.8z" fill="currentColor"/></svg>
  )
}