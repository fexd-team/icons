import React from 'react'

export default function BandaidFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M2.68 7.676l6.49-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529l-5.006 5.006l-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002l1.505-1.492l.001-.002zm5.71-2.858a.5.5 0 1 0-.708.707a.5.5 0 0 0 .707-.707zM6.974 6.939a.5.5 0 1 0-.707-.707a.5.5 0 0 0 .707.707zM5.56 8.354a.5.5 0 1 0-.707-.708a.5.5 0 0 0 .707.708zm2.828 2.828a.5.5 0 1 0-.707-.707a.5.5 0 0 0 .707.707zm1.414-2.121a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707zm1.414-.707a.5.5 0 1 0-.706-.708a.5.5 0 0 0 .707.708zm-4.242.707a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707zm1.414-.707a.5.5 0 1 0-.707-.708a.5.5 0 0 0 .707.708zm1.414-2.122a.5.5 0 1 0-.707.707a.5.5 0 0 0 .707-.707zM8.646 3.354l4 4l.708-.708l-4-4l-.708.708zm-1.292 9.292l-4-4l-.708.708l4 4l.708-.708z"/></g></svg>
  )
}