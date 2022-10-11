import { useState } from "react";
const Form  =({ setValueEmoji }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const handleSearch = e => {
      e.preventDefault();
      if(value === ''){
          setError(true);
          setTimeout(()=>setError(false), 2000);
          return;
      }
      setValueEmoji(value);
      console.log(value);
  }
  const allEmojis = () => {
      setValueEmoji('');
  }
  return (
    <div className="searchbar">
          <form onSubmit={handleSearch}>
              <input className="searchbarinput"
                  type="text"
                  placeholder="emoji word..."
                  onChange={e => setValue(e.target.value)} />
         </form>
         <button className="btn"
                    type="button"
                    onClick={allEmojis}
                >
                    Search
                </button>
         </div>
  )}
export default Form