import React from 'react'


const Emoji = ( {emojis}) => {
 
return (
  //setEmoji ([...emojis, {}])
 <>
 {emojis.map((emoji, index)=>(
  <h4 key={index}>{emoji.symbol} {emoji.title}</h4>
 ))}
 </>
)
}

export default Emoji