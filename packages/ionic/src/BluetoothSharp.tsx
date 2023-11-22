import React from 'react'

export default function BluetoothSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M397.41 161.13L236-.28v212.8l-94.17-80.72l-26 30.37L225.27 256L115.8 349.83l26 30.37l94.2-80.72v212.8l161.41-161.41L286.73 256zM276 96.28l62.59 62.59L276 212.52zm62.58 256.85L276 415.72V299.48z" fill="currentColor"/></svg>
  )
}