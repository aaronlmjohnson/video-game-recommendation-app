import { createContext, useState } from "react"
import useApiHandler from "../components/useGameAPI/useApiHandler";
export const FilterOptionsContext = createContext();

const FilterOptionsContextProvider = ({children})=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const {data:developers, loading:developersLoading} = useApiHandler("https://api.rawg.io/api/developers?key=" + RAWG_API_KEY);
    const {data:platforms, loading:platformsLoading} = useApiHandler("https://api.rawg.io/api/platforms?key=" + RAWG_API_KEY);
    const {data:genres, loading:genresLoading} = useApiHandler("https://api.rawg.io/api/genres?key=" + RAWG_API_KEY);

    const optionsLoading = ()=> developersLoading && platformsLoading && genresLoading;
    return (
        <FilterOptionsContext.Provider
            value={
                {
                    developers,
                    platforms,
                    genres,
                    optionsLoading
                }
            }
        >
            {children}
        </FilterOptionsContext.Provider>
    )
}

export default FilterOptionsContextProvider;



