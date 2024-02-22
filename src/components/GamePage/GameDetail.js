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
import GameDetailNav from './GameDetailNav';
import ScreenshotSection from './ScreenshotSection';
import GameOverview from './GameOverview';

const GameDetail = ()=>{
    const {
        gameId,
        RAWG_API_KEY,
        setGameDetailOpen
     } = useGameDataContext();

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
    },[gameId]);

   

        return(
            <> 
                <div className="overlay"></div>
                {detailLoading && <LoadingScreen />}
                {!detailLoading && 
                <section className="game-detail">
                  {detailError && <GameNotFound setError={setDetailError}/>}
                   {detailData &&  <>
                    <GameDetailNav name={detailData.name}/>
                    <section className="game-detail-content">
                        <ScreenshotSection 
                            screenshotData={screenshotData}
                            screenshotsLoading={screenshotsLoading}
                        />
                        <GameOverview 
                            detailData={detailData}
                        />
                    </section>
                    </>}
                </section>
            }
            </>
        )
}

export default GameDetail;
