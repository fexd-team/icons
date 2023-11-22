import React from 'react'

export default function Wrench({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019l.528.026l.287.445l.445.287l.026.529L15 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L13 15l-.471-.242l-.529-.026l-.287-.445l-.445-.287l-.026-.529L11 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026L13 11l.471.242z"/></g></svg>
  )
}