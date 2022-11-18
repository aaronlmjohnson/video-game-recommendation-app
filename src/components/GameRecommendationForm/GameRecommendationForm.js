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
            <GenresInput data={data} />
            <ReleaseDateInput data={data} />
            <RatingInput data={data} />
            <DevelopersInput data={data} />
            <input type="submit" />
        </form>
    )
}

export default GameRecommendationForm;