import React from 'react'

const Button = ({src,colors,topic}) => {
  return (
    <div style={{backgroundColor: '#2C2A2F', borderRadius: '10px',margin: '4px'}}>
        <lord-icon className="clickable-icon" src={src} trigger="hover" colors={colors}></lord-icon>
        <p>{topic}</p>
    </div>
  )
}

export default Button