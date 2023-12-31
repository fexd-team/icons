import React from 'react'

export default function EllipsisOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`exd-icon ${className}`}><path d="M176 511a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0z" fill="currentColor"/></svg>
  )
}