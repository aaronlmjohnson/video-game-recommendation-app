import './App.css';
import GameDetail from './components/GamePage/GameDetail';
import BentoContainer from './components/BentoContainer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import useGameDataContext from './customHooks/useGameDataContext';

function App () {
  const {frontPageLoading, gameDetailOpen, frontPageData, gameDetailDataError } = useGameDataContext();

  const nameAndImageData = (data)=>{
    return data?.results.reduce((accum, game)=> {
      accum.push({src: game.background_image, name: game.name, id: game.id});
      return accum;
    }, [])
  }
  
  return (
      <div className="wrapper">
        {
          frontPageLoading ? 
          <LoadingScreen /> :
          <>
            {gameDetailDataError ? <div className="error-text">{gameDetailDataError}</div> :gameDetailOpen && <GameDetail />}
            <BentoContainer 
              data={nameAndImageData(frontPageData)}
            />
          </>
        }        
      </div>
  );
}

export default App;
