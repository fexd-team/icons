import React from 'react'

export default function Fork({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M270.2 148.9c0 .1-.1.1 0 0v.1-.1z" fill="currentColor"/><path d="M320 166c0-43.2-15-93.2-24-133.7V32h-8l-.2 116.9c0 6.1-2.9 11.1-9 11.1-5.7 0-8-4.3-8.6-9.9-.1-.4 0-.8 0-1.2L259.9 32h-8l-9 117-.1 1.1c-.6 5.6-3.7 9.9-9.5 9.9-6.1 0-9.1-5-9.1-11.1L223.8 32h-8C207 73 192 122.9 192 166.1c0 25.7 14.6 48.1 36.7 58.2 11.2 5.1 11.3 10.3 11.3 10.3s-16 201.7-16 213.1c0 11.4 4 18.5 9.5 24s14.2 8.2 22.4 8.2h.4c8.2 0 16.8-2.7 22.4-8.2 5.5-5.5 9.3-10.9 9.3-24s-16-213.1-16-213.1-1-5 11.4-10.6c21.6-9.8 36.6-32.2 36.6-58z" fill="currentColor"/></svg>
  )
}