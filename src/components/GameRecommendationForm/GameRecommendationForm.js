import DevelopersInput from "../DevelopersInput/DevelopersInput";
import GenresInput from "../GenresInput/GenresInput";
import PlatformsInput from "../PlatformsInput/PlatformsInput"
import RatingInput from "../RatingInput/RatingInput";
import ReleaseDateInput from "../ReleaseDateInput/ReleaseDateInput";
import './GameRecommendationForm.css';

const GameRecommendationForm = ({data, handleSubmit, setRenderGameForm})=>{
    
    return(
        <div id="recommendation-form">
            <form onSubmit={(e) => handleSubmit(e, {})} >
                <button id="close-form" onClick={(e) => setRenderGameForm(false)}>Close</button>
                <PlatformsInput data={data} />
                <GenresInput data={data} />
                <ReleaseDateInput data={data} />
                <RatingInput data={data} />
                <DevelopersInput data={data} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default GameRecommendationForm;