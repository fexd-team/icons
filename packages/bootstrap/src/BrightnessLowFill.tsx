import React from 'react'

export default function BrightnessLowFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707a.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707a.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707a.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707a.5.5 0 0 1-.707.707z"/></g></svg>
  )
}