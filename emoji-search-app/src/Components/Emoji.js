import React from 'react'


const Emoji = ( {emojis}) => {
return (
 <div className='emoji-container'>
 {emojis.map((emoji, index)=>(
  <h4 key={index}>{emoji.symbol} {emoji.title}</h4>
 ))}
 </div>
)
}
export default Emoji