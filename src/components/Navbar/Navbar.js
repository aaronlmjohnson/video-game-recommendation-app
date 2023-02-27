import './Navbar.css';

import { useState } from 'react';
const Navbar = ({getRandomGame, setRenderGameForm, setGamePageOpen})=>{
    const [findActive, setFindActive] = useState(false);
    const [randomActive, setRandomActive] = useState(false);

    return(// do this with loop
        <div id="nav-bar">
            <div className='button-container'>
                <button id="find-a-game" className={`nav-button ${findActive ? "active-nav-btn" : ''} ${randomActive ? "inactive-nav-btn" : ''}`} 
                    onClick={(e)=>setRenderGameForm(true)}
                    onMouseEnter={(e)=> setFindActive(true)}
                    onMouseLeave={()=> setFindActive(false)}
                >
                    <p className="nav-button-text">Find a Game</p>
                    
                </button>
                <div className="hover-highlight"></div>
            </div>
            <div className='button-container'>
                <button id="random-game" className={`nav-button ${randomActive ? "active-nav-btn" : ''} ${findActive ? "inactive-nav-btn" : ''}`}
                    onClick={()=>{
                        setGamePageOpen(true);
                        getRandomGame();
                    }}
                    onMouseEnter={()=> setRandomActive(true)}
                    onMouseLeave={()=> setRandomActive(false)}
                >
                    <p className="nav-button-text">Random Game</p>
                    
                </button>
            <div className="hover-highlight"></div>
            </div>
        </div>
    );
}

export default Navbar;