import GenresInput from "../GenresInput/GenresInput";
import PlatformsInput from "../PlatformsInput/PlatformsInput"
import ReleaseDateInput from "../ReleaseDateInput/ReleaseDateInput";

const GameRecommendationForm = ({data, handleSubmit, setRenderGameForm})=>{
    const updateRating = (e)=>{
        document.getElementById("textInput").value = e.target.value;
    }
    return(
        <form onSubmit={(e) => handleSubmit(e, {})}>
            <button id="close-form" onClick={(e) => setRenderGameForm(false)}>Close</button>
            <PlatformsInput data={data} />
            <br/>
            <GenresInput data={data} />
            <br/>
            <ReleaseDateInput data={data} />

            

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