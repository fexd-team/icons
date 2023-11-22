import React from 'react'

export default function Gift({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 14v16h24V14M2 9v5h28V9zm14 0s-2-9-8-6s8 6 8 6s2-9 8-6s-8 6-8 6m0 0v21"/></g></svg>
  )
}