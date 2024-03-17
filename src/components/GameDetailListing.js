const GameDetailListing = ({objKey, value})=>{
    const capitalizeFirst = (str)=>{
        const suffix = str.split("");
        suffix.shift();
        return str.split("")[0].toUpperCase() + suffix.join("");
    }
    return(
        <li className="game-detail-listing">
            <p>{capitalizeFirst(objKey)}</p>
            <p className="game-detail-listing-value">{value}</p>
        </li>
    );
}

export default GameDetailListing;