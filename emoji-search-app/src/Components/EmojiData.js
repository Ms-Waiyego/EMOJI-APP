import EmojiPage from "./EmojiPage";

// Receives props of the emoji

function EmojiData( { emoji }){

    return(
        <div>
            <h3 >{loading ? "Loading ..." : "Emojis :" }</h3>
            {emoji.map((emoji) => {
                return <EmojiPage emoji={emoji}/>})}
        </div>
    )
}

export default EmojiData;