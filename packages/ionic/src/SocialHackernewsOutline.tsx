import React from 'react'

export default function SocialHackernewsOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M416 96v320H96V96h320m32-32H64v384h384V64z" fill="currentColor"/><path d="M296.7 159H342l-63.9 120v72h-39.9v-72L172 159h47.1l39.7 83.6 37.9-83.6z" fill="currentColor"/></svg>
  )
}