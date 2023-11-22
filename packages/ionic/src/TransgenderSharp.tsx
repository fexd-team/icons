import React from 'react'

export default function TransgenderSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480 448.94l-48.94-49.08L464 366.92l-31.1-31.11l-32.9 32.9l-23.55-23.61a149.64 149.64 0 0 0-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 0 0-178.59 0l-7.55-7.55l33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33l7.56 7.57A149.18 149.18 0 0 0 106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0 0 89.44-29.67l23.51 23.58l-33.14 33.05l31.11 31.1l33-33l48.9 49zm-330-193a106 106 0 1 1 106 106a106.09 106.09 0 0 1-106-106z" fill="currentColor"/></svg>
  )
}