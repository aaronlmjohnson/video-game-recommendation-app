import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';
import GameCarousel from '../GameCarousel/GameCarousel';
import useCarousel from '../useCarousel/useCarousel';
import { useEffect } from 'react';
import useApiHandler from '../useGameAPI/useApiHandler';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './PopularGamesSection.css';

const PopularGamesSection = ({url, year, setYear, game, setGamePageOpen})=>{
    //const { setGames, games, shiftLeft, shiftRight, positionNames, animationNames, gamesExist, onDisplay } = useCarousel();
    const { data, refetch, loading } = useApiHandler(`${url}&dates=2024-01-01,2024-12-31&page_size=16`);

    useEffect(()=>{
        if(!loading) console.log(data);
        else console.log("loading...");
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
                fetchGame= {game.fetchGame}
                setGamePageOpen={setGamePageOpen}
            />
            
        </div>
    );
}
    

export default PopularGamesSection;