import React from 'react'
import propTypes from 'prop-types'

const Button = ({ text , onClick}) => {
  return (
    <button 
    className='btn'
    onClick = {onClick}>
        {text}
    </button>
  )
}

Button.propTypes= {
  onClick : propTypes.func
}

export default Button