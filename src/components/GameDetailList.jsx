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
        <ul className="game-detail-li">
            {keys.map((objKey, i) =>{
                    return(
                        <GameDetailListing 
                            key={`${properties.id}-${i}`}
                            objKey={objKey}
                            value={
                                objKey === "released" || objKey === "rating" ?
                                properties[objKey]:
                                getAllProperties(properties[objKey], objKey)
                            }
                        />
                    )
                }
            )}
        </ul>
    );
}

export default GameDetailList;