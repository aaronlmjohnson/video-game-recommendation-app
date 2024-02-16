import { GameDataContext } from "../contexts/GameDataContext";
import { useContext } from "react";

const useGameDataContext = ()=>{
    const context = useContext(GameDataContext);

    if(!context){
        throw new Error(
            "useYearContext must be used within a YearContextProvider"
        )
    }

    return context;
}

export default useGameDataContext;