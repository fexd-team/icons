import React from 'react'

export default function TicketPerforated({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M4 4.85v.9h1v-.9H4zm7 0v.9h1v-.9h-1zm-7 1.8v.9h1v-.9H4zm7 0v.9h1v-.9h-1zm-7 1.8v.9h1v-.9H4zm7 0v.9h1v-.9h-1zm-7 1.8v.9h1v-.9H4zm7 0v.9h1v-.9h-1z"/><path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5a1.5 1.5 0 1 1 0 3a.5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5a1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5z"/></g></svg>
  )
}