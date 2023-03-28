import FormSection from "./FormSection";
import RatingInput from "../RatingInput/RatingInput";
import ReleaseDateInput from "../ReleaseDateInput/ReleaseDateInput";
import './GameRecommendationForm.css';

const GameRecommendationForm = ({data, handleSubmit})=>{

    

    
    return(
        <div id="recommendation-form-container">
            <form id="recommendation-form" onSubmit={(e) => handleSubmit(e, {})} >
                <FormSection data={data} type={"platforms"}/>
                <FormSection data={data} type={"genres"}/>
                <ReleaseDateInput data={data} />
                <RatingInput data={data} />
                <FormSection data={data} type={"developers"}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default GameRecommendationForm;