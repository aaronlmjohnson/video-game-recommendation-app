import { createContext, useState } from "react"
import useApiHandler from "../components/useGameAPI/useApiHandler";
import useYearContext from "../customHooks/useYearContext";
export const GameDataContext = createContext();

const GameDataContextProvider = ({children})=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const { year } = useYearContext();
    const GAMES_URL = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}`;
    
    const [gameId, setGameId] = useState(null);
    const [gameDetailOpen, setGameDetailOpen] = useState(false);

    const {
        data:frontPageData, 
        loading:frontPageLoading, 
        refetch:refetchFrontPageData
    } = useApiHandler(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=9`);

    const {
        data:gameDetailData,
        loading: gameDetailDataLoading,
        refetch: refetchGameDetailData
    } = useApiHandler();


    return (
        <GameDataContext.Provider
            value={
                {
                    frontPageData,
                    frontPageLoading,
                    refetchFrontPageData,
                    gameId,
                    setGameId,
                    gameDetailOpen,
                    setGameDetailOpen,
                    gameDetailData,
                    gameDetailDataLoading,
                    refetchGameDetailData,
                    GAMES_URL
                }
            }
        >
            {children}
        </GameDataContext.Provider>
    )
}

export default GameDataContextProvider;



