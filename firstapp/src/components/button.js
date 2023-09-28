import React from 'react'
import './button.css'

const Button = ({ src, colors, topic }) => {
  return (
    <div style={{ backgroundColor: '#2C2A2F', borderRadius: '10px', margin: '4px' }}>
      <lord-icon className="clickable-icon" src={src} trigger="hover" colors={colors}>{topic}</lord-icon>
    </div>
  )
}

export default Button