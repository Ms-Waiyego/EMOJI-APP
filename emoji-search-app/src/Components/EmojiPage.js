// Displays each emoji 

function Page({ emoji }){
    const { strName,
            strCategory , 
            strGroup ,
            strhtmlCode,
            strunicode, 
        } = emoji ; 

    return (
     <div className="flex flex-row gap-5 align-middle">
        <img src={strhtmlCode} alt={strunicode} className="object-cover h-86 w-96 shadow-2xl"></img>
            <h3>Emoji Name : {strName}</h3>
            <h3>Category :{strCategory}</h3>
            <h3>Group{strGroup}</h3>
    </div>
    )
}
export default CocktailPage; 