import { FilterOptionsContext } from "../contexts/FilterOptionsContext";
import { useContext } from "react";

const useFilterOptionsContext = ()=>{
    const context = useContext(FilterOptionsContext);

    if(!context){
        throw new Error(
            "useFormOptionsContext must be used within a FilterOptionsContextProvider"
        )
    }

    return context;
}

export default useFilterOptionsContext;