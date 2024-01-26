import { useEffect, useState } from "react";

const useApiHandler =  (url = "")=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{ 
        if(url) refetch(url);
    }, []);

        async function refetch(url){ 
            try{
                setLoading(true);
                const response = await fetch(url, {
                    method: "GET", 
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
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
    
    return {data, loading, error, setError, refetch};

}

export default useApiHandler;