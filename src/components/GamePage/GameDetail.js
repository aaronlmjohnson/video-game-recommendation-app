import './GameDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import GameNotFound from './GameNotFound';
import { useState, useEffect, useContext } from 'react';
import { YearContext } from '../../App';
import useApiHandler from '../useGameAPI/useApiHandler';
import GameDetailList from './GameDetailList';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const GameDetail = ()=>{
    const { setGameDetailOpen, gameId } = useContext(YearContext);

    const [mainScreenshot, setMainScreenshot] = useState(null);
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

    const url = `https://api.rawg.io/api/games/${gameId}?key=${RAWG_API_KEY}`;
    const { data:gameData, loading:gameLoading } = useApiHandler(url);

    const screenshotUrl = `https://api.rawg.io/api/games/${gameId}/screenshots?key=${RAWG_API_KEY}&page_size=5`;
    const { data:screenshotData, loading:screenshotsLoading } = useApiHandler(screenshotUrl);

    const limitDescription = (description)=>{
        const strArr = description.split('.' || '?' || '!');
        return [strArr[0], strArr[1], strArr[2]].join('.') +"...";
    }

        return(
            <> 
                <div className="overlay"></div>
                
                {/* (gameLoading && screenshotsLoading) ? 
            gameData && */}
            {gameLoading && screenshotsLoading ?
                <LoadingScreen /> :
                gameData && <section className="game-detail">
                    <nav>
                        <h1 >{gameData.name}</h1>
                        <button onClick={()=> setGameDetailOpen(false)}>Close</button>
                    </nav>
                    <section className="game-detail-content">
                        <section className="screenshot-section">
                            <img src={mainScreenshot} alt="#" /> 
                            <ScreenshotCarousel 
                                    mainScreenshot={mainScreenshot}
                                    setMainScreenshot = {setMainScreenshot}
                                    screenshotData={screenshotData}
                                    screenshots={screenshotsLoading}
                            /> 
                        </section>
                        <aside className="game-details-section">
                            <img className="game-details-section-img" src={gameData.background_image} alt={gameData.name} />
                            <p>{limitDescription(gameData.description_raw)}</p>
                            <GameDetailList properties={gameData}/>
                        </aside>
                    </section>
                </section>
            }
            </>
        )
}

export default GameDetail;
