import React from 'react'

export default function IosBrowsers({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 181.4V424c0 22.1 17.9 40 40 40h242.6c22.1 0 40-17.9 40-40V181.4c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40z" fill="currentColor"/><path d="M141.4 88v28.4c0 2.2 1.8 4 4 4h198.2c26.4 0 48 21.6 48 48v198.2c0 2.2 1.8 4 4 4H424c22.1 0 40-17.9 40-40V88c0-22.1-17.9-40-40-40H181.4c-22.1 0-40 17.9-40 40z" fill="currentColor"/></svg>
  )
}