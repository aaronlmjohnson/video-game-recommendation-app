import './GamePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faDice } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
import ScreenshotCarousel from '../ScreenshotCarousel/ScreenshotCarousel';
import GameNotFound from './GameNotFound';

const GamePage = ({game, data, loading, clear, exists, dataExists, screenshots, mainScreenshot, setMainScreenshot, getRandomGame, setGamePageOpen})=>{
    const screenshotsExist = Object.keys(screenshots).length > 0;
    
    console.log(screenshotsExist);
    const limitDescription = (description)=>{
        //Some Rawg api game descriptions are far too long. Need this to limit word count
        const MAX_COUNT = 150;
        const splitDesc = description.split(' ');
        const ellipsis = splitDesc.length > MAX_COUNT ? "..." : "";
        const filtered = `${splitDesc.slice(0, MAX_COUNT-2).join(' ')}${ellipsis}`;
        return filtered;
    }

    const displayGamePage = ()=>{
        return(<>
            <ScreenshotCarousel 
                        screenshots = {screenshots}
                        screenshotsExist = {screenshotsExist} 
                        mainScreenshot = {mainScreenshot}
                        setMainScreenshot = {setMainScreenshot}
                        name = {data.name}
            />
            <div id="game-page-right">
                <img id="game-page-image-right" src={data.background_image} alt={data.name}/>
                <div id="game-info">
                    <ul id="game-overview">
                        <li className="description">
                            <p>{limitDescription(data.description_raw)}</p>
                        </li>
                        <li className="released">
                                <p>Release Date:</p>
                                <span className="highlight">
                                    <p>{data.released}</p>
                                </span>
                        </li>
                        <li className="rating">
                            <p>Reviews: </p>
                            <span className="highlight"><p>{data.rating}</p></span>
                        </li>
                    </ul>
                    <GameInfoList 
                        data={data.genres.slice(0, 4)}
                        header={"Genres: "}
                        name={"genre"}
                    />
                    <GameInfoList 
                        data={data.developers}
                        header={"Developers: "}
                        name={"developer"}
                    />
                    <GameInfoList 
                        data={data.publishers}
                        header={"Publishers: "}
                        name={"publisher"}
                    />
                    <GameInfoList 
                        data={data.platforms}
                        header={"Platforms: "}
                        name={"platform"}
                    />
                </div>
            </div>
        </>);
    }

    if(loading || !dataExists) return (<div className="game-page">Loading...</div>);


        return(
            <div className="game-page">
                <div id="game-page-nav">
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
                </div>
            </div>
        )
}

export default GamePage;