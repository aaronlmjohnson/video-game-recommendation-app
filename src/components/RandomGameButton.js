import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDice } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const RandomGameButton = ()=>{
    const [headerActive, setHeaderActive] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault();
        console.log("year")
    }

    const handleHover = ()=>{
        setHeaderActive(true);
    }

    const handleLeave = ()=>{
        setHeaderActive(false);
    }

    return(
        <button className="random-game-button" onMouseOver={handleHover} onMouseLeave={handleLeave}>
            <h2 className={`random-game-header ${headerActive ? 'active' : 'inactive'}`}>
                Select a Random Game.
            </h2>

                <FontAwesomeIcon icon={faDice} />
        </button>       
    )
}

export default RandomGameButton;