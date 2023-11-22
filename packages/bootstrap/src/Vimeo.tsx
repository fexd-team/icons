import React from 'react'

export default function Vimeo({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393c-2.175 2.829-4.016 4.243-5.522 4.243c-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437c1.243-.123 2.01.728 2.298 2.553c.31 1.968.526 3.19.646 3.666c.36 1.631.756 2.446 1.186 2.445c.334 0 .836-.53 1.508-1.587c.671-1.058 1.03-1.863 1.077-2.415c.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756c1.644.05 2.419 1.117 2.324 3.2z"/></g></svg>
  )
}