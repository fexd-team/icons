import React from 'react'

export default function PieChartSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M58 362.09l-6.51-14.59A224 224 0 0 1 256 32h16v234.37z" fill="currentColor"/><path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208c0-103.81-76.45-190.1-176-205.54z" fill="currentColor"/></svg>
  )
}