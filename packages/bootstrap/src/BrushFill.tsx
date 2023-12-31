import React from 'react'

export default function BrushFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`exd-icon ${className}`}><g fill="currentColor"><path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868c-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132a3.659 3.659 0 0 1-.562-.135a1.382 1.382 0 0 1-.466-.247a.714.714 0 0 1-.204-.288a.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452c.394-.197.625-.453.867-.826c.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848c.528-.739 1.201-.925 1.746-.896c.126.007.243.025.348.048c.062-.172.142-.38.238-.608c.261-.619.658-1.419 1.187-2.069c2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/></g></svg>
  )
}