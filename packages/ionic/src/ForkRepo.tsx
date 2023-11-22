import React from 'react'

export default function ForkRepo({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M416 80h-48V32h-64v48h-48v64h48v48h64v-48h48z" fill="currentColor"/><path d="M304 240c0 38.6-4.5 42.3-14.4 50.3-7.4 6-22.2 7.1-39.4 8.3-9.5.7-20.4 1.5-31.4 3.3-9.4 1.5-18.4 4.7-26.8 8.8V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-15.7-5.7-30.1-15-41.2 6.7-4.8 13.9-8.7 20.2-9.7 8.1-1.3 16.6-1.9 25.6-2.6 24.4-1.7 52.1-3.7 75.2-22.5 30.9-25.1 37.5-52.1 38-94.9V240h-64zM160 64c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm0 384c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z" fill="currentColor"/></svg>
  )
}