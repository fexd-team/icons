import React from 'react'

export default function MdShuffle({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z" fill="currentColor"/></svg>
  )
}