import GameDetailListing from "./GameDetailListing";

const GameDetailList = ({properties})=>{
    const keys = [
        "released",
        "rating",
        "developers",
        "publishers",
        "genres",
        "platforms",
    ];

    const getAllProperties = (property, key)=>{
        return property.map((content)=>{
            if(key === "platforms") return content.platform.name;
            return content.name;
        }).join(", ");
    }


    return(
        <ul className="game-detail-list">
            {keys.map((objKey) =>{
                if(objKey === "released" || objKey === "rating"){
                    return(
                        <GameDetailListing 
                            objKey={objKey}
                            value={properties[objKey]}
                        />
                    )
                }else{
                return (
                    <GameDetailListing 
                        objKey={objKey}
                        value={getAllProperties(properties[objKey], objKey)}
                    />
                )
            }
            })}
        </ul>
    );
}

export default GameDetailList;