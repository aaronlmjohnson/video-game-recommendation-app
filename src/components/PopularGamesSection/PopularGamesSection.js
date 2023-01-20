import { useEffect } from 'react';
import PopularGames from '../PopularGames/PopularGames';
import useApiHandler from '../useGameAPI/useApiHandler';
import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';
import './PopularGamesSection.css';
import useCarousel from '../useCarousel/useCarousel';


const PopularGamesSection = ({apiKey,  year, updateYear, changePopularYearData})=>{
    const GAMES_URL = `https://api.rawg.io/api/games?key=${apiKey}`;
    const { data, loading } = useApiHandler(`${GAMES_URL}&dates=2023-01-01,2023-12-31&page_size=16`);
    const { setGames, subset, shiftLeft, shiftRight } = useCarousel();

    useEffect(()=>{
        if(!loading) setGames(data.results);
    }, [data]);

    if(loading) <p>{"Loading..."}</p>
    else {
        return (
            <div id="popular-games-section">
                <YearSelectionForm 
                    year={year} 
                    updateYear={updateYear} 
                    changePopularYearData={changePopularYearData}
                    
                />
                
                <PopularGames 
                    games={subset} 
                    shiftRight = { shiftRight }
                    shiftLeft = { shiftLeft }
                />
                
            </div>
        );
    }
}

export default PopularGamesSection;