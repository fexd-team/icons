import React from 'react'

export default function MdBed({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M168.7 264.5c29 0 52.4-22.9 52.4-51.2s-23.4-51.2-52.4-51.2-52.4 22.9-52.4 51.2 23.5 51.2 52.4 51.2zm209.5-102.4H238.5v119.5H98.9V128H64v256h34.9v-51.2h314.2V384H448V230.4c0-37.7-31.2-68.3-69.8-68.3z" fill="currentColor"/></svg>
  )
}