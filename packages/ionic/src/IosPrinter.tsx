import React from 'react'

export default function IosPrinter({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M128 224h256v224H128z" fill="currentColor"/><path d="M127.5 224.5h256v224h-256z" fill="currentColor"/><path d="M111.5 64.5h288v32h-288z" fill="currentColor"/><path d="M432.5 112.5h-352c-17.645 0-33 12.842-33 30.309v158.393c0 17.468 15.355 33.299 33 33.299h31v-126h288v126h33c17.645 0 31-15.831 31-33.299V142.809c0-17.467-13.355-30.309-31-30.309z" fill="currentColor"/></svg>
  )
}