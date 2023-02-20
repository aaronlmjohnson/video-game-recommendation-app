import './GamePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';

const GamePage = ({data, loading, clear, exists, dataExists, screenshots})=>{
    if(loading) return (<div className="game-page">Loading...</div>);
    if(!dataExists) return null;

    const displayGamePage = ()=>{
        return(
            <div className="game-page">
                <div id="game-page-nav">
                    <h1 className="game-title">{data.name}</h1>
                    <button id="game-page-exit-button" onClick={clear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <div id="game-page-main">  
                    <div id="game-page-left">
                        <img id="game-page-image-left" src={screenshots.results[0].image} alt={data.name}/>
                        <ul className="screenshots">
                        {screenshots.results.map((screenshot)=>{
                            return <li key={screenshot.id} >
                                <img className="screenshot" src={screenshot.image}></img>
                            </li>
                        })}
                    </ul>
                    </div>
                    <div id="game-page-right">
                        <img id="game-page-image-right" src={data.background_image} alt={data.name}/>
                        <div id="game-info">
                            <ul id="game-overview">
                                <li className="description">
                                    <p>{data.description_raw}</p>
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
                </div>
            </div>
        )
    }

    const displayPageNotFound = ()=> <>Game Not Found!</>;

    return !exists ? displayPageNotFound() : displayGamePage();
}

export default GamePage;