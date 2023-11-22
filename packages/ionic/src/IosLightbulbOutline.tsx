import React from 'react'

export default function IosLightbulbOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M400 172.9C400 95.1 333.9 32 256 32S112 95.1 112 173c0 31 13.2 59 30.2 83h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.6v1.4h128v-1.4c0-8.9-3.6-43.8 18.4-81.6 10.1-17.3 20.6-30 31.5-45h-.1c16.9-24 30.1-52 30.1-83.1zm-49 81.5c-.6.8-1.1 1.5-1.7 2.3-8.1 10.9-16.5 22.2-24.7 36.1-17.3 29.7-20.4 57.9-20.8 75.1H288V256l32-64h-16.6L272 256v112h-32V256l-31.4-64H192l32 64v112h-15.9c-.5-17.2-3.9-45.7-20.9-75-4.5-7.7-9.1-15-13.7-21h.2l-18.6-25.6c-15.8-21.6-27.1-47.1-27.1-73.6 0-33.4 16-64.8 39.6-88.4s55-36.7 88.4-36.7c33.4 0 64.8 13.1 88.4 36.7 23.6 23.6 39.6 55 39.6 88.4 0 26.5-11.3 51.9-27.1 73.5l-5.9 8.1z" fill="currentColor"/><path d="M224 464h64v16h-64z" fill="currentColor"/><path d="M208 432h96v16h-96z" fill="currentColor"/><path d="M208 400h96v16h-96z" fill="currentColor"/></svg>
  )
}