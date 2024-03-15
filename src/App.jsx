import './App.css';
import GameDetail from './components/GamePage/GameDetail';
import BentoContainer from './components/BentoContainer';
import LoadingScreen from './components/LoadingScreen';
import useGameDataContext from './customHooks/useGameDataContext';
import { useEffect } from 'react';

function App () {
  const {frontPageLoading, gameDetailOpen, frontPageData, gameDetailDataError, setOverlayOn, overlayOn } = useGameDataContext();

  const nameAndImageData = (data)=>{
    return data?.results.reduce((accum, game)=> {
      accum.push({src: game.background_image, name: game.name, id: game.id});
      return accum;
    }, [])
  }

  useEffect(()=>{
    if(gameDetailOpen){
      setOverlayOn(true);
    }else{
      setOverlayOn(false);
    }
  }, [gameDetailOpen])
  
  return (
      <div className="wrapper">
        {overlayOn && <div className="overlay main"></div>}
        {
          frontPageLoading ? 
          <LoadingScreen /> :
          <>
            {gameDetailOpen && <GameDetail />}
            <BentoContainer 
              data={nameAndImageData(frontPageData)}
            />
          </>
        }        
      </div>
  );
}

export default App;
