import React from 'react'

export default function ColorFillOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M419.1 337.45a3.94 3.94 0 0 0-6.1 0c-10.5 12.4-45 46.55-45 77.66c0 27 21.5 48.89 48 48.89h0c26.5 0 48-22 48-48.89c0-31.11-34.3-65.26-44.9-77.66z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M387 287.9L155.61 58.36a36 36 0 0 0-51 0l-5.15 5.15a36 36 0 0 0 0 51l52.89 52.89l57-57L56.33 263.2a28 28 0 0 0 .3 40l131.2 126a28.05 28.05 0 0 0 38.9-.1c37.8-36.6 118.3-114.5 126.7-122.9c5.8-5.8 18.2-7.1 28.7-7.1h.3a6.53 6.53 0 0 0 4.57-11.2z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
  )
}