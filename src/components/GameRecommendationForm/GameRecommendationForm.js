const GameRecommendationForm = ({data, handleSubmit})=>{
    const updateRating = (e)=>{
        document.getElementById("textInput").value = e.target.value;
    }
    return(
        <form onSubmit={(e) => handleSubmit(e, {})}>
            <div id="form-platforms">
                <h1>Platforms</h1>
                {data.platforms.results.map((platform)=>{
                    const inputName = `platforms-${platform.id}`;
                    return (<div className="form-platform" key={platform.id}>
                        <label htmlFor={inputName}>{platform.name}</label>
                        <input type="checkbox" name={inputName}/>
                    </div>);
                })}
            </div>
            <br/>
            <div id="form-genres">
                <h1>Genres</h1>
                {data.genres.results.map((genre)=>{
                    const inputName =`genres-${genre.id}`;
                    return (<div className="form-genre">
                        <label htmlFor={inputName}>{genre.name}</label>
                        <input type="checkbox" name={inputName}/>
                    </div>)
                })}
            </div>

            <div id="form-released">
                <h1>Release Date</h1>
                <div id="form-released-start" >
                    <input type="date" name="start-date"/>
                </div>
                to
                <div id="form-released-end" >
                    <input type="date" name="end-date"/>
                </div>
            </div>

            <div id="form-rating"> 
                <label htmlFor="metacritic">Rating:</label>
                <input type="range" name="metacritic" min="0" max="100" onChange={updateRating}/>
                <input type="text" id="textInput" value="" ></input>
            </div>

            <div id="form-developers">
                <h1>Developers</h1>
                {data.developers.results.map((developer)=>{
                    const inputName= `developers-${developer.id}`;
                    return (<div className="form-genre">
                        <label htmlFor={inputName}>{developer.name}</label>
                        <input type="checkbox" name={inputName}/>
                    </div>)
                })}
            </div>
            <input type="submit" />
        </form>
    )
}

export default GameRecommendationForm;