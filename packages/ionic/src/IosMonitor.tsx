import React from 'react'

export default function IosMonitor({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z" fill="currentColor"/><path d="M48 128h416v224H48z" fill="currentColor"/></svg>
  )
}