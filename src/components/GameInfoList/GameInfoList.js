
const GameInfoList = ({data, name, header})=>{
    const needsComma = (i, length) => i+1 === length ? '' : ',';

    return( 
        <div className = "game-info-list" id={`game-${name}s`}>
            <h1>{header}</h1>
                <ul>
                    {data.map((datum, i)=>{
                        return <li key={datum.id} className={name}>
                            <span className="highlight">
                                {name === "platform" ? datum.platform.name : datum.name} 
                                {needsComma(i, data.length)}
                            </span>
                        </li>
                    })}
                </ul>
        </div>
    );
}

export default GameInfoList;