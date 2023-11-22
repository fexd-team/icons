import React from 'react'

export default function LogoFirefox({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M471.46 194.62v-.07c-.22-.76-.45-1.52-.68-2.28c-.05-.19-.11-.38-.17-.56c-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223.24 223.24 0 0 0-10-25.56a191.77 191.77 0 0 0-12.9-23.8a225.15 225.15 0 0 0-74.74-73.74A222.9 222.9 0 0 0 256 32c-7 0-14 .34-20.82 1c-24.12 2.54-64.78 11.21-97.77 40.18C257.5 11.86 417.94 85.7 404.29 223c-4.86 49-46.46 82.67-85.19 88.35a73.73 73.73 0 0 1-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83c-38-.24-67.47 46.79-53.15 93c-32.95-61.18.35-157 70.93-186c-82.95-12-160.71 28.2-185.7 98.07A330.23 330.23 0 0 1 88.07 118s-45.22 35.74-54.44 110.9c-.14 1.16-.27 2.32-.39 3.49c-.05.4-.09.8-.13 1.21q-.53 5.25-.8 10.57v.81c-.07 1.48-.13 3-.17 4.46v1.25c0 1.76-.07 3.52-.07 5.29c0 123.71 100.29 224 224 224S480 379.71 480 256a224 224 0 0 0-8.54-61.38z" fill="currentColor"/></svg>
  )
}