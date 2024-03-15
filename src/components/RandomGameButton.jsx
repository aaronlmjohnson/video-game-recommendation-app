import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDice } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import useGameDataContext from '../customHooks/useGameDataContext';

const RandomGameButton = ({header, classList})=>{
    const MAX_GAMES = 264297 //As of February 2024 this is to avoid making another API call
    const {setGameDetailOpen, gameDetailData, setGameId, gameDetailDataError, gameId} = useGameDataContext();
    useEffect(()=>{
        if(gameDetailDataError)console.log("error", gameDetailDataError)
    }, [gameDetailDataError])

    const handleClick = (e)=>{
        e.preventDefault();
        setGameId(Math.ceil(Math.random()* MAX_GAMES)); //264297 this game causes an error in game detail
        //
        setGameDetailOpen(true);
    }

    return(
        <button className={"random-game-button " + classList } onClick={handleClick}>
            {header && <h2>{header}</h2>}
            <FontAwesomeIcon icon={faDice} />
        </button>       
    )
}

export default RandomGameButton;