import DevelopersInput from "../DevelopersInput/DevelopersInput";
import GenresInput from "../GenresInput/GenresInput";
import PlatformsInput from "../PlatformsInput/PlatformsInput";

const FormSection = ({type, data}) => {
    
    const toggleSeeMore = (seeMore, e)=>{ 
        e.preventDefault();
        return seeMore ? false : true;
    }

    return (
      type === "platforms" ? <PlatformsInput data={data} toggleSeeMore={toggleSeeMore} /> : 
      type === "genres" ? <GenresInput data={data} toggleSeeMore={toggleSeeMore} />  :
      type === "developers" ? <DevelopersInput data={data} toggleSeeMore={toggleSeeMore} /> : null
    );
  }
  
  export default FormSection;