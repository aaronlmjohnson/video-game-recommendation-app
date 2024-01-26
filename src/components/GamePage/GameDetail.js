import './GameDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import GameNotFound from './GameNotFound';
import { useState, useEffect } from 'react';
import useApiHandler from '../useGameAPI/useApiHandler';
import GameDetailList from './GameDetailList';

const GamePage = ({ setGamePageOpen, gameId })=>{
    // const {data:gameData, loading:gameDataLoading, refetch} = useApiHandler("")
    const [mainScreenshot, setMainScreenshot] = useState(null);
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const url = `https://api.rawg.io/api/games/${gameId}?key=${RAWG_API_KEY}`;
    const { data:gameData, loading:gameLoading } = useApiHandler(url);

    const limitDescription = (description)=>{
        const strArr = description.split('.');
        return [strArr[0], strArr[1], strArr[2]].join('.') +"...";
    }

        return(
            gameData && <section className="game-detail">
                <button onClick={()=> setGamePageOpen(false)}>Close</button>
                <h1>{gameData.name}</h1>
                <img src={mainScreenshot} alt="#" width="500px"/> 
                <ScreenshotCarousel 
                        id = {gameData.id}
                        mainScreenshot={mainScreenshot}
                        setMainScreenshot = {setMainScreenshot}
                /> 
                <img src={gameData.background_image} alt={gameData.name} width="400px"/>
                <p>{limitDescription(gameData.description_raw)}</p>
                <GameDetailList properties={gameData}/>


            
            </section>
        )
}

export default GamePage;

 {/* <div id="game-page-nav">
                    <h1 className="game-title">{exists && data.name}</h1>
                    <div id="game-page-nav-buttons">
                        <button id="game-page-random-button" className="random-button-styling" >
                            {!game.error ? 
                                <FontAwesomeIcon id="game-page-nav-random-icon" icon={faDice} onClick={getRandomGame}/>: null
                            }
                        </button>
                        <button className="exit-button" onClick={()=>{
                            setGamePageOpen(false)
                            clear();
                        }}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>                    
                </div>

                <div className="game-page-main">  
                    {!exists ? <GameNotFound getRandomGame={getRandomGame}/> : displayGamePage()}
                </div> */}

               