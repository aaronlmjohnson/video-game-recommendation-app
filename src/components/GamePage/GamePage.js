import './GamePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import GameInfoList from '../GameInfoList/GameInfoList';
const GamePage = ({data, loading, clear, exists, dataExists, screenshots})=>{
    if(loading) return (<div className="game-page">Loading...</div>);
    if(!dataExists) return null;
    const needsComma = (i, length) => i+1 === length ? '' : ',';

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
                            <p className="description">{data.description_raw}</p>
                            <p className="released">{data.released}</p>
                            
                            <p className="rating">{data.rating}</p>
                        
                            <p>Genres:</p>
                            <ul className="genres">
                            {data.genres.slice(0, 4).map((genre, i)=>{
                                return <li key={genre.id} className="genre">
                                            {genre.name} {needsComma(i, data.genres.length)}
                                        </li>
                            })}
                            </ul>

                            <h1>Developers:</h1>
                            <ul className="developers">
                                {data.developers.map((developer, i)=>{
                                    return <li key={developer.id} className="developer">
                                        {developer.name} {needsComma(i, data.developers.length)}
                                    </li>
                                })}
                            </ul>

                            <h1>Publisher:</h1>
                            <ul className="publishers">
                                {
                                    data.publishers.map((publisher, i)=>{
                                        return <li key={publisher.id} className="publisher">
                                            {publisher.name}{needsComma(i, data.publishers.length)}
                                        </li>
                                    })
                                }
                            </ul>

                            <GameInfoList 
                                data={data.platforms}
                                header={"Platforms: "}
                                name={"platform"}
                            />
                    
                            {/* <ul className="game-platforms">
                                {
                                    data.platforms.map((platform, i)=>{
                                        return <li key={platform.id} className="platform">
                                            {platform.platform.name}{needsComma(i, data.platforms.length)}
                                        </li>
                                    })
                                }
                            </ul> */}
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