import React from 'react'

export default function ClosedCaptioning({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M0 64v384h512V64H0zm464 191.825c.045 26.724-1.547 47.143-3.797 80.223S441 392.5 401.097 396.168C361.201 399.835 305.369 400.12 256 400c-49 .12-105.198-.165-145.094-3.832-39.903-3.668-56.855-27.04-59.105-60.12s-3.841-53.499-3.796-80.223c-.045-26.725.095-44.124 3.798-80.224s23.01-56.267 59.106-59.934S201.842 112 248.704 112H263.302c46.862 0 101.698 0 137.795 3.667s55.403 23.833 59.106 59.934 3.842 53.499 3.797 80.224z" fill="currentColor"/><path d="M372 283.846v.766c0 18.639-11.581 29.566-27.003 29.566-15.418 0-25.808-12.309-27.284-29.566 0 0-1.335-9.078-1.335-27.298s1.546-29.759 1.546-29.759c2.711-19.473 12.188-29.566 27.607-29.566 15.367 0 27.584 13.262 27.584 33.388.023.086.01.624.01.624h51.541c0-25-6.309-47.556-18.92-61.746-12.617-14.183-31.403-21.273-56.369-21.273-12.483 0-23.93 1.654-34.33 4.942-10.404 3.295-19.376 9.062-26.916 17.291-7.545 8.234-13.397 19.254-17.555 33.059-4.162 13.809-6.242 31.224-6.242 52.247 0 20.52 1.688 37.684 5.072 51.488 3.377 13.811 8.388 24.83 15.018 33.059 6.632 8.234 14.953 13.935 24.967 17.1 10.01 3.163 21.779 4.748 35.304 4.748 28.604 0 49.089-7.258 61.443-21.318C418.486 327.537 424.666 307 424.666 280H372v3.846z" fill="currentColor"/><path d="M195 283.846v.766c0 18.639-11.581 29.566-27.003 29.566-15.418 0-25.808-12.309-27.284-29.566 0 0-1.335-9.078-1.335-27.298s1.546-29.759 1.546-29.759c2.711-19.473 12.188-29.566 27.607-29.566 15.367 0 27.584 13.262 27.584 33.388.023.086.01.624.01.624h51.541c0-25-6.309-47.556-18.92-61.746-12.617-14.183-31.403-21.273-56.369-21.273-12.483 0-23.93 1.654-34.33 4.942-10.404 3.295-19.376 9.062-26.916 17.291-7.545 8.234-13.397 19.254-17.555 33.059-4.162 13.809-6.242 31.224-6.242 52.247 0 20.52 1.688 37.684 5.072 51.488 3.377 13.811 8.388 24.83 15.018 33.059 6.632 8.234 14.953 13.935 24.967 17.1 10.01 3.163 21.779 4.748 35.304 4.748 28.604 0 49.089-7.258 61.443-21.318C241.486 327.537 247.666 307 247.666 280H195v3.846z" fill="currentColor"/></svg>
  )
}