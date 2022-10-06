// Displays each emoji 

function EmojiPage({ emoji }){
    const { strName,
            strCategory , 
            strGroup ,
            strhtmlCode,
            strunicode, 
        } = emoji ; 

    return (
     <div >
        <img src={strhtmlCode} alt={strunicode}></img>
            <h3>Emoji Name : {strName}</h3>
            <h3>Category :{strCategory}</h3>
            <h3>Group{strGroup}</h3>
    </div>
    )
}
export default EmojiPage; 