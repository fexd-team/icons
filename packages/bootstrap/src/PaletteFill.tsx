import React from 'react'

export default function PaletteFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08c-.124-1.101-.252-2.237.351-2.92c.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"/></g></svg>
  )
}