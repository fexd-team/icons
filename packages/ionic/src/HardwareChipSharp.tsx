import React from 'react'

export default function HardwareChipSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><path d="M160 160h192v192H160z" fill="currentColor"/><path d="M480 198v-44h-32V88a24 24 0 0 0-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 0 0-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0 0 24 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0 0 24-24v-66h32v-44h-32v-36h32v-44h-32v-36zm-352-70h256v256H128z" fill="currentColor"/></svg>
  )
}