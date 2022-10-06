import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import Button from './Button'


const Header = () => {
  const onClick = ()=>{
    console.log('click')
  }
  return (
    <header className='header'>
        <h1>Emoji Search</h1>
        <Button text = 'Search' onClick={onClick}/>
    </header>
  )
}
export default Header