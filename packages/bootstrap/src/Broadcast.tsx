import React from 'react'

export default function Broadcast({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M3.05 3.05a7 7 0 0 0 0 9.9a.5.5 0 0 1-.707.707a8 8 0 0 1 0-11.314a.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656a.5.5 0 1 1-.708.708a5 5 0 0 1 0-7.072a.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0a5 5 0 0 1 0 7.072a.5.5 0 1 1-.708-.708a4 4 0 0 0 0-5.656a.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0a8 8 0 0 1 0 11.313a.5.5 0 0 1-.707-.707a7 7 0 0 0 0-9.9a.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"/></g></svg>
  )
}