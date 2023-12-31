import React from 'react'

export default function LinkSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M200.66 352H144a96 96 0 0 1 0-192h55.41" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="48"/><path d="M312.59 160H368a96 96 0 0 1 0 192h-56.66" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="48"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="48" d="M169.07 256h175.86"/></svg>
  )
}