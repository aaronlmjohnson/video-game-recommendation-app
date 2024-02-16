import { YearContext } from "../contexts/YearContext";
import { useContext } from "react";

const useYearContext = ()=>{
    const context = useContext(YearContext);

    if(!context){
        throw new Error(
            "useYearContext must be used within a YearContextProvider"
        )
    }

    return context;
}

export default useYearContext;