import React from 'react'

export default function Power({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M7.5 1v7h1V1h-1z"/><path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/></g></svg>
  )
}