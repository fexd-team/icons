import React from 'react'

export default function BatteryHalfOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`exd-icon ${className}`}><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32"/><rect x="85.69" y="198.93" width="154.31" height="114.13" rx="4" ry="4" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M480 218.67v74.66"/></svg>
  )
}