import { useEffect, useState } from "react";

const useApiHandler =  (url = "")=>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        //if(url)refetch(url);   
        
    }, [])

    const refetch = (url)=>{
        const getData = async()=>{ //need to set data in the finally block. Was setting too early in try block within getData
            
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
                setLoading(false);
            }
        }
        getData();
    }
    
    return data && {data, loading, error, setError, refetch};

}

export default useApiHandler;