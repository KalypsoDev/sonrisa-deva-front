import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  )
}

export default Button
