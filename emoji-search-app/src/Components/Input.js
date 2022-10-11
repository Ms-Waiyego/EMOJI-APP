import React from 'react'
import { useState } from 'react'

const Input = () => {
  const [text , setText] = useState("")
  return (
    <form className='search'>
        <div className='search-form'>
          <input type="text" placeholder = "Search" 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
          />
          <div className='btn-search'>
          <input  type ="submit"value="search emoji" />
          </div>
        </div>
    </form>
  )
}

export default Input