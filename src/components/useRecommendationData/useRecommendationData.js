import { useEffect, useState } from "react";
import useApiHandler from "../useGameAPI/useApiHandler";

const useRecommendationData =  ()=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

    const {data, refetch} = useApiHandler(`https://api.rawg.io/api/platforms?key=${RAWG_API_KEY}&page=2`);
    const [formData, setFormData] = useState({});


    useEffect(()=>{

        setFormData((prevState)=>{
            return {...prevState, platforms:data}
        });

        refetch(`https://api.rawg.io/api/genres?key=${RAWG_API_KEY}`);
        setFormData((prevState)=>{
            return {...prevState, genres:data}
        });

        refetch(`https://api.rawg.io/api/developers?key=${RAWG_API_KEY}&page=2&page_size=100`);
        setFormData((prevState)=>{
            return {...prevState, developers:data}
        });
        console.log(formData);
    }, [])
    
    

    // setFormData({platforms, genres, developers});
    return formData && {formData};

}

export default useRecommendationData;