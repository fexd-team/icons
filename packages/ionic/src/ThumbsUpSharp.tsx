import React from 'react'

export default function ThumbsUpSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M456 192l-156-12l23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40z" fill="currentColor"/></svg>
  )
}