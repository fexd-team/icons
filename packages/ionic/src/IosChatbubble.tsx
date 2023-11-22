import React from 'react'

export default function IosChatbubble({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 96C149.9 96 64 165.1 64 250.3c0 30.7 11.2 59.3 30.4 83.3.9.9 2.9 3.8 3.6 4.9 0 0-1-1.6-1.1-1.9 2.3 3.3 3.6 7.1 3.6 11.2 0 1.4-17.9 58-17.9 58-1.3 4.4 2.1 8.9 7.6 10 .8.2 1.6.2 2.4.2 1.3 0 2.5-.2 3.7-.5l1.6-.6 50.6-22c.9-.4 9-3.5 10-3.9l.6-.2s-.1 0-.6.2c3.4-1.2 7.2-1.8 11.2-1.8 3.6 0 7.1.5 10.3 1.5.1 0 .2 0 .2.1.5.2 1 .3 1.5.5 23.1 7.9 48.4 10.3 75.1 10.3 106 0 191-64.1 191-149.3C448 165.1 362 96 256 96z" fill="currentColor"/></svg>
  )
}