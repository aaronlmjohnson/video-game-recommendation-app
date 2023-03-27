const RecommendedGames = ({data, loading})=>{
    return (
        <div id="popular-games-for-this-year">
            {data && data.length > 0 ? <h1>You might like these games:</h1> : <></>}

            {data && data.map((game)=>{
                return (<div key={game.id}>
                        <img src={game.background_image}/>
                        <p>{game.name}</p>
                        
                    </div>)
            })}
        </div>
    );
}

export default RecommendedGames;