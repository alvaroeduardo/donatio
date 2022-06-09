import React from 'react'
import './style.css'

function Button(props) {
  return (
    <div className={ props.StyleType } onClick={ props.Action }>
        <h1 className='buttonTitle'>{ props.Title }</h1>
    </div>
  )
}

export default Button;