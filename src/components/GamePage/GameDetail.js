import './GameDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import GameNotFound from './404';
import { useState, useEffect } from 'react';
import useApiHandler from '../useGameAPI/useApiHandler';
import GameDetailList from './GameDetailList';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import useGameDataContext from '../../customHooks/useGameDataContext';
import RandomGameButton from '../RandomGameButton';

const GameDetail = ()=>{
    const {
        gameId,
        RAWG_API_KEY,
        setGameDetailOpen
     } = useGameDataContext();

    const [mainScreenshot, setMainScreenshot] = useState(null);
    const screenshotUrl = `https://api.rawg.io/api/games/${gameId}/screenshots?key=${RAWG_API_KEY}&page_size=5`;

    const { data:screenshotData, loading:screenshotsLoading, refetch:newScreenshots } = useApiHandler(screenshotUrl);

    const { data:detailData, 
            loading:detailLoading, 
            error:detailError,
            refetch:newDetail,
            setError: setDetailError 
    } = useApiHandler(`https://api.rawg.io/api/games/${gameId}?key=${RAWG_API_KEY}`);

    useEffect(()=>{
        newDetail(`https://api.rawg.io/api/games/${gameId}?key=${RAWG_API_KEY}`);
        newScreenshots(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${RAWG_API_KEY}&page_size=5`);
        console.log(gameId);
    },[gameId])
    const limitDescription = (description)=>{
        const strArr = description.split('.' || '?' || '!');
        return [strArr[0], strArr[1], strArr[2]].join('.') +"...";
    }

        return(
            <> 
                <div className="overlay"></div>
                {detailLoading && <LoadingScreen />}
                {!detailLoading && 
                <section className="game-detail">
                  {detailError && <GameNotFound setError={setDetailError}/>}
                   {detailData &&  <>
                    <nav>
                        <h1 >{detailData.name}</h1>
                        <button onClick={()=> setGameDetailOpen(false)}>Close</button>
                        <RandomGameButton />
                    </nav>
                    <section className="game-detail-content">
                        <section className="screenshot-section">
                            {(screenshotData && screenshotData.results.length > 1 )&& <img src={mainScreenshot} alt="#" /> }
                            <ScreenshotCarousel 
                                    mainScreenshot={mainScreenshot}
                                    setMainScreenshot = {setMainScreenshot}
                                    screenshotData={screenshotData}
                                    screenshots={screenshotsLoading}

                            /> 
                        </section>
                        <aside className="game-details-section">
                            <img className="game-details-section-img" src={detailData.background_image} alt={detailData.name} />
                            <p>{limitDescription(detailData.description_raw)}</p>
                            <GameDetailList properties={detailData}/>
                        </aside>
                    </section>
                    </>}
                </section>
            }
            </>
        )
}

export default GameDetail;
