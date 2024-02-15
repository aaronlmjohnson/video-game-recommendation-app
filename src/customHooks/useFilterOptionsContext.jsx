import { FilterOptionsContext } from "../contexts/FilterOptionsContext";
import { useContext } from "react";

const useFilterOptionsContext = ()=>{
    console.log("wtf", FilterOptionsContext);
    const context = useContext(FilterOptionsContext);
    console.log("wth", context);
    if(!context){
        throw new Error(
            "useFormOptionsContext must be used within a FilterOptionsContextProvider"
        )
    }

    return context;
}

export default useFilterOptionsContext;