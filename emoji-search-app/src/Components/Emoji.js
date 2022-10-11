import React from 'react'

const emojis = [
  {
    "id":"1",
    "title": "100",
    "symbol": "💯",
    "keywords":
      "hundred points symbol symbol wow wow win win perfect perfect parties parties"
  },
  {
    "id":"2",
    "title": "1234",
    "symbol": "🔢",
    "keywords": "input symbol for numbers symbol"
  },
  {
    "id":"3",
    "title": "Grinning",
    "symbol": "😀",
    "keywords": "grinning face happy smiley emotion emotion"
  },
  {
    "id":"4",
    "title": "Grimacing",
    "symbol": "😬",
    "keywords": "grimacing face silly smiley emotion emotion selfie selfie"
  },
]

const Emoji = () => {
return (
 <>
 {emojis.map((emoji)=>(
  <h4 key={emoji.id}>{emoji.symbol} {emoji.title}</h4>
 ))}
 </>
)
}

export default Emoji