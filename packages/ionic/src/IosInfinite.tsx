import React from 'react'

export default function IosInfinite({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M456.8 182.4c-20-19.6-46.8-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4l-31.2 30c-1.6 1.6-1.6 4.2 0 5.7l19.4 19.1c1.5 1.5 4 1.5 5.6 0l31-30.1c13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3 13.4 13.1 20.7 30.5 20.7 49 0 18.4-7.4 35.8-20.7 48.7-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3L205.6 182.4c-20.2-19.6-46.9-30.4-75.2-30.4-28.5 0-55.2 10.8-75.2 30.4C35.1 202 24 228.1 24 256c0 27.8 11.1 54 31.2 73.6 20 19.6 46.8 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4l31-30c1.6-1.6 1.6-4.2 0-5.7L217.2 275c-1.5-1.5-4-1.5-5.6 0l-31 29.9c-13.5 13.1-31.3 20.3-50.3 20.3-19 0-36.8-7.2-50.3-20.3-13.4-13.1-20.7-30.5-20.7-49 0-18.4 7.4-35.7 20.7-48.7 13.5-13.1 31.3-20.3 50.3-20.3 19 0 36.8 7.2 50.3 20.3l125.5 122.5c20.2 19.6 46.9 30.4 75.2 30.4 28.5 0 55.2-10.8 75.2-30.4 20.2-19.6 31.3-45.7 31.3-73.6.2-27.9-10.9-54.1-31-73.7z" fill="currentColor"/></svg>
  )
}