import useGameDataContext from "../../customHooks/useGameDataContext";
import RandomGameButton from "../RandomGameButton";

const GameDetailNav = ({ name })=>{
    const { setGameDetailOpen } = useGameDataContext();

    return (
        <nav className="game-detail-nav">
            <h1 >{name}</h1>
            <button onClick={()=> setGameDetailOpen(false)}>Close</button>
            <RandomGameButton />
        </nav>
    );
}

export default GameDetailNav;