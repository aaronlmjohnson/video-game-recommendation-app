import './GameInfoList.css';

const GameInfoList = (data, name, header)=>{

    const needsComma = (i, length) => i+1 === length ? '' : ',';

        return( 
                <div className = "game-info-list" id={`game-info-${name}`}>
                    <h1>{header}</h1>
                        <ul>
                            {data.map((datum, i)=>{
                                return <li key={datum.id} className={name}>
                                    {datum.name} {needsComma(i, data.length)}
                                </li>
                            })}
                        </ul>
                 </div>
        )

}

export default GameInfoList;