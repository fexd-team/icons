import React from 'react'

export default function Stoplights({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M8 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm0 4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm1.5 2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"/><path d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v2h2c-.167.5-.8 1.6-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c-1.2-.4-1.833-1.5-2-2h2V8c-1.2-.4-1.833-1.5-2-2h2V4c-1.2-.4-1.833-1.5-2-2h2zm2-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6z"/></g></svg>
  )
}