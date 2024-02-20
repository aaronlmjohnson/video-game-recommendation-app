import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDice } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import useGameDataContext from '../customHooks/useGameDataContext';

const RandomGameButton = ()=>{
    const MAX_GAMES = 863248 //As of February 2024 this is to avoid making another API call
    const {setGameDetailOpen, gameDetailData, setGameId, gameDetailDataError, gameId} = useGameDataContext();
    useEffect(()=>{
        if(gameDetailDataError)console.log("error", gameDetailDataError)
    }, [gameDetailDataError])

    const handleClick = (e)=>{
        e.preventDefault();
        setGameId(789810); //789810 this game has no screenshots
        //Math.ceil(Math.random()* MAX_GAMES)
        setGameDetailOpen(true);
    }

    return(
        <button className="random-game-button" onClick={handleClick}>
                <FontAwesomeIcon icon={faDice} />
        </button>       
    )
}

export default RandomGameButton;