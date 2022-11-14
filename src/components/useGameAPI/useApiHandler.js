import { useEffect, useState } from "react";

const useApiHandler =  (url = "")=>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        if(url) refetch(url);   
        
    }, [url])

    const refetch = (url)=>{
        const getData = async()=>{ 
            
            try{
                setLoading(true);
                const response = await fetch(url, {mode:'cors'});

                if(!response.ok) 
                    throw Error(response.status);
                const apiData = await response.json();

                setData(apiData);
            }catch(e){
                setError(true);
            }finally{
                console.log("Loaded");
                setLoading(false);
            }
        }
        getData();
    }
    
    return data && {data, loading, error, setError, refetch};

}

export default useApiHandler;