import useGameDataContext from "../customHooks/useGameDataContext";

const BentoNode = ({ data }) => {

    const { setGameDetailOpen, setGameId, overlayOn } = useGameDataContext();

    const handleClick = (e)=>{
        //to prevent the occasional triggering of nodes being clicked despite pointer-events set to none
        if(overlayOn) return; 

        setGameId(data.id);
        setGameDetailOpen(true);
    }
    
    return (
        <div className={`bento-node ${overlayOn && 'overlay-open'}`} onClick={handleClick}>
           {!overlayOn && <div className="overlay">
                <h2 className={"game-name"}>{data.name}</h2>
            </div>}
            <img src={data.src} alt={data.name}/>
            
        </div>
    );
}

export default BentoNode;