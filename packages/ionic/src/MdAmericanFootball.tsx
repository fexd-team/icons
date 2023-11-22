import React from 'react'

export default function MdAmericanFootball({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M32 256c14.1 35 36.2 66 64 90.6V165.4C68.2 190 46.1 221 32 256z" fill="currentColor"/><path d="M480 256c-14.1-35-36.2-66-64-90.6v181.2c27.8-24.6 49.9-55.6 64-90.6z" fill="currentColor"/><g><path d="M256 105c-47.1 0-91 13.4-128 36.5v228.9c37 23.1 80.9 36.5 128 36.5s91-13.4 128-36.5V141.5c-37-23.1-80.9-36.5-128-36.5zm96 135v64h-32v-32h-48v32h-32v-32h-48v32h-32v-96h32v32h48v-32h32v32h48v-32h32v32z" fill="currentColor"/></g></svg>
  )
}