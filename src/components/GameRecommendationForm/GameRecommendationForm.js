import DevelopersInput from "../DevelopersInput/DevelopersInput";
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
            <br />
            <DevelopersInput data={data} />
            <input type="submit" />
        </form>
    )
}

export default GameRecommendationForm;