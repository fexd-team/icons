import React from 'react'

export default function AndroidPlane({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M448 336v-40L288 192V79.2c0-17.683-14.82-31.2-32-31.2-17.179 0-32 13.518-32 31.2V192L64 296v40l160-48v113.602l-48 31.199V464l80-16 80 16v-31.199l-48-31.199V288l160 48z" fill="currentColor"/></svg>
  )
}