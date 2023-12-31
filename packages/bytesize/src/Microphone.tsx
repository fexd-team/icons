import React from 'react'

export default function Microphone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`exd-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 2c-4 0-4 4-4 4v10s0 4 4 4s4-4 4-4V6s0-4-4-4zM8 17s0 7 8 7s8-7 8-7M13 29h6m-3-5v5"/></g></svg>
  )
}