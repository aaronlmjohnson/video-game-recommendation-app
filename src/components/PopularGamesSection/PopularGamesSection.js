import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';
import GameCarousel from '../GameCarousel/GameCarousel';
import useCarousel from '../useCarousel/useCarousel';
import { useEffect } from 'react';
import useApiHandler from '../useGameAPI/useApiHandler';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './PopularGamesSection.css';

const PopularGamesSection = ({url, year, setYear, game, setGamePageOpen})=>{
    const { setGames, subset, shiftLeft, shiftRight, positionNames } = useCarousel();
    const { data, refetch, loading } = useApiHandler(`${url}&dates=2023-01-01,2023-12-31&page_size=16`);

    useEffect(()=>{
        if(!loading) setGames(data.results);
    }, [data]);

    return (
        loading ? <LoadingScreen /> :
        <div id="popular-games-section">
            <YearSelectionForm 
                year={year} 
                setYear={setYear}
                url={url} 
                refetch={refetch}                
            />
            
            <GameCarousel 
                games={subset} 
                shiftRight = { shiftRight }
                shiftLeft = { shiftLeft }
                positionNames = { positionNames }
                fetchGame= {game.fetchGame}
                setGamePageOpen={setGamePageOpen}
            />
            
        </div>
    );
}
    

export default PopularGamesSection;