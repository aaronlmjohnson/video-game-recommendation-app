import GenresInput from "../GenresInput/GenresInput";
import PlatformsInput from "../PlatformsInput/PlatformsInput"
import RatingInput from "../RatingInput/RatingInput";
import ReleaseDateInput from "../ReleaseDateInput/ReleaseDateInput";

const GameRecommendationForm = ({data, handleSubmit, setRenderGameForm})=>{
    
    return(
        <form onSubmit={(e) => handleSubmit(e, {})}>
            <button id="close-form" onClick={(e) => setRenderGameForm(false)}>Close</button>
            <PlatformsInput data={data} />
            <br/>
            <GenresInput data={data} />
            <br/>
            <ReleaseDateInput data={data} />
            <br/>
            <RatingInput data={data} />
            
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