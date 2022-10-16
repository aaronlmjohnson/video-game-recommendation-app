import { useEffect, useState } from "react";

const useApiHandler =  (url)=>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{ 
        refetch(url); 
    }, [url])

    const refetch = (url)=>{
        const getData = async()=>{ 
            
            try{
                setLoading(true);
                const response = await fetch(url, {mode:'cors'});
                const apiData = await response.json();
                setData(apiData);
            }catch(e){
                setError(e);
            }
            setLoading(false);
        }
        getData();
    }

    
    return data && {data, loading, error, refetch};

}

export default useApiHandler;