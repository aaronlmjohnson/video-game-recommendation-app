import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';
import GameCarousel from '../GameCarousel/GameCarousel';
import useCarousel from '../useCarousel/useCarousel';
import { useEffect } from 'react';
import useApiHandler from '../useGameAPI/useApiHandler';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './PopularGamesSection.css';

const PopularGamesSection = ({ url, setGamePageOpen, setGame })=>{
    //const { setGames, games, shiftLeft, shiftRight, positionNames, animationNames, gamesExist, onDisplay } = useCarousel();
    const {data:games, loading:gamesLoading, error} = useApiHandler(`${url}&dates=2024-01-01,2024-12-31&page_size=16`);
    return (
        <main>
            
        </main>
    );
}
    

export default PopularGamesSection;