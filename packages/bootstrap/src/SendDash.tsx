import React from 'react'

export default function SendDash({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178l1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494l-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7zm-2.54 1.183L5.93 9.363L1.591 6.602l11.833-4.733z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0zm-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z"/></g></svg>
  )
}