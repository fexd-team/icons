import React from 'react'

export default function FlameSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M394.24 197.56a300.67 300.67 0 0 0-53.38-90C301.2 61.65 240 32 192 32c19 70-14.36 117.12-44.79 163.77C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.76-122.44zM288.33 418.69C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78c6.48-14.07 14.66-27.22 15.11-44.49c11.3 5.88 23.67 16.91 34.54 31.28c18.17 24 29 52.42 29 76c.01 22.23-5.41 39.76-15.66 50.68z" fill="currentColor"/></svg>
  )
}