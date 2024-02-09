const BentoNode = ({data }) => {
    
    return (
        <div className={`bento-node `}>
            <div className="overlay">
                <h2 className={"game-name"}>{data.name}</h2>
            </div>
            <img src={data.src} alt={data.name}/>
            
        </div>
    );
}

export default BentoNode;