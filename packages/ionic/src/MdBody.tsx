import React from 'react'

export default function MdBody({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M256 48c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm192 144.1H320V464h-42.7V320h-42.7v144H192V192.1H64v-42.7h384v42.7z" fill="currentColor"/></svg>
  )
}