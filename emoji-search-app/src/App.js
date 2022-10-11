import Header from "./Components/Header"
import Emoji from "./Components/Emoji"
import { useState, useEffect} from 'react'
import Input from './Components/Input'

function App(){
  const [emoji, setEmoji] = useState ([])

 useEffect(()=>{
  const getEmoji = async () => {
    const emojisServer = await fetchEmoji()
    setEmoji(emojisServer)
  }
  getEmoji()}, [])

 //Fetching data
 const fetchEmoji = async ()=>{
  const res = await fetch ('http://localhost:5000/emojis')
  const data = await res.json()
  return data
 }
  return(
    <div className="container">
   <Header/>
   <Input/>
   <Emoji emojis={emoji}/>

  </div>
  )}
export default App;