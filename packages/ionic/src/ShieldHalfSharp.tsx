import React from 'react'

export default function ShieldHalfSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08c23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64zm161.47 233.93a309.18 309.18 0 0 1-63.31 99.56C316 406 276.65 428.31 256 437.36V75.8c38.75 17 68.73 28.3 97.93 36.89a613.12 613.12 0 0 0 85.6 18.52c-1.72 60.22-8.36 99.69-22.06 134.72z" fill="currentColor"/></svg>
  )
}