import './GamePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const GamePage = ({data, loading, clear, exists, dataExists})=>{
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
                
                
                <img src={data.background_image} alt={data.name} width="500px"/>
                
                <p className="game-released">{data.released}</p>
                <p className="game-description">{data.description_raw}</p>
                <p className="game-rating">{data.rating}</p>

                <p>Genres:</p>
                <ul className="game-genres">
                {data.genres.slice(0, 4).map((genre)=>{
                    return <li key={genre.id} className="genre">{genre.name}</li>
                })}
                </ul>

                <h1>Developers:</h1>
                <ul className="game-developers">
                    {data.developers.map((developer)=>{
                        return <li key={developer.id} className="developer">
                            {developer.name}
                        </li>
                    })}
                </ul>

                <h1>Publisher:</h1>
                <ul className="game-publishers">
                    {
                        data.publishers.map((publisher)=>{
                            return <li key={publisher.id} className="publisher">
                                {publisher.name}
                            </li>
                        })
                    }
                </ul>

                <h1>Platforms:</h1>
                <ul className="game-platforms">
                    {
                        data.platforms.map((platform)=>{
                            return <li key={platform.id} className="platform">
                                {platform.platform.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }

    const displayPageNotFound = ()=> <>Game Not Found!</>;

    return !exists ? displayPageNotFound() : displayGamePage();
}

export default GamePage;