import { useEffect, useState } from "react";

const useApiHandler =  (url = "")=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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
                if(!response.ok){ 
                    setError(true);
                    throw Error(response.status);
                }
                const apiData = await response.json();
                setData(apiData);
            }catch(e){
                setError(e.message);
            }finally{

                setLoading(false);
            }
        }
    
    return {data, loading, error, setError, refetch};

}

export default useApiHandler;