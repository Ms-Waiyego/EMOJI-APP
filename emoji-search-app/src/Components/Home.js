import { Route , Switch , Link } from "react-router-dom";
import { useState, useEffect, } from "react"
import About from "./About";
import EmojiPage from "./EmojiPage";
import EmojiData from "./EmojiData";

//Fetching the url to be used
const url = `https://emojihub.herokuapp.com/api/all/group_animal_bird`

//All necessary navigating tools
function Nav(){
    return (
           <div >
            <Link to="/" > Home </Link>
            <Link to="/about" > About </Link>
           </div>
    )
}

//Emoji home page
function Home(){
    const [emoji, setEmoji] = useState([]);
    const [ loading, setLoading ] = useState(true);

  const fetchEmoji = () => {
    return fetch("https://emojihub.herokuapp.com/api/all/group_animal_bird")
          .then((response) => response.json())
          .then((data) => setEmoji(data));
  }

  useEffect(() => {
    fetchEmoji();
  },[])

return (
    <div>
      <Nav/>
      <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/">
            <EmojiPage emoji={emoji} loading={loading} />
        </Route>
      </Switch>
    </div>
)

}
export default Home