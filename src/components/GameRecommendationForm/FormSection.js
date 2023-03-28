import DevelopersInput from "../DevelopersInput/DevelopersInput";
import GenresInput from "../GenresInput/GenresInput";
import PlatformsInput from "../PlatformsInput/PlatformsInput";
import { useState } from "react";

const FormSection = ({type, data}) => {
    const [seeMore, setSeeMore] = useState(false);
    const toggleSeeMore = (seeMore, e)=>{ 
        e.preventDefault();
        return seeMore ? false : true;
    }

    return (
        <div className="form-section">
            {type === "platforms" ? <PlatformsInput data={data} seeMore={seeMore} /> : 
            type === "genres" ? <GenresInput data={data} seeMore={seeMore} />  :
            type === "developers" ? <DevelopersInput data={data} seeMore={seeMore} /> : null}
            <button onClick={(e)=>{
                    setSeeMore(toggleSeeMore(seeMore, e));
                }
                }>see more</button>
        </div>
      
    );
  }
  
  export default FormSection;