import { useContext } from "react";
import { YearContext } from "../App";

const BentoNode = ({ data }) => {
    const { setGameDetailOpen, setGameId } = useContext(YearContext);

    const handleClick = ()=>{
        setGameId(data.id);
        setGameDetailOpen(true);
    }
    
    return (
        <div className={`bento-node`} onClick={handleClick}>
            <div className="overlay">
                <h2 className={"game-name"}>{data.name}</h2>
            </div>
            <img src={data.src} alt={data.name}/>
            
        </div>
    );
}

export default BentoNode;