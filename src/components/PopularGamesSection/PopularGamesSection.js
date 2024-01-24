import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';
import GameCarousel from '../GameCarousel/GameCarousel';
import useCarousel from '../useCarousel/useCarousel';
import { useEffect } from 'react';
import useApiHandler from '../useGameAPI/useApiHandler';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './PopularGamesSection.css';

const PopularGamesSection = ({ url })=>{
    //const { setGames, games, shiftLeft, shiftRight, positionNames, animationNames, gamesExist, onDisplay } = useCarousel();

    return (
        <main>
            <GameCarousel url={url} />
            
        </main>
    );
}
    

export default PopularGamesSection;