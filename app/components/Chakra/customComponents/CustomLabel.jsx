import React from 'react'

export const CustomLabel = (props) => {
  const {label, followBar, style} = props

  const followStyle = followBar ? { left: label, transform: `translateX(-${label})` } : {}

  const labelStyle = {...style, ...followStyle}

  return (
    <div
      className='customLabel'
      style={labelStyle}
    >
      {label}
    </div>
  )
}