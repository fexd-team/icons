import React from 'react'

export default function ReorderFourSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44" d="M102 304h308"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44" d="M102 208h308"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44" d="M102 112h308"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44" d="M102 400h308"/></svg>
  )
}