import { useState } from "react";

import MainBentoNode from "./MainBentoNode";

const BentoNode = ({ main, position, index, data }) => {

    const [reversing, setReversing] = useState(false);
    const hsl = [
        Math.ceil(Math.random() * 360),
        Math.ceil(Math.random() * 100),
        50 + Math.ceil(Math.random() * 20)
    ];

    const styleBlock = ()=>{
        return {
            'backgroundImage' : `url(${src})`,
            // 'background': `hsl(${hsl[0]} ${hsl[1]} ${hsl[2]})`,
        }
    }

    const src = index ? data[index].src : ""

    return (
        main ?
        <MainBentoNode /> :
        <div style={styleBlock()} className={`bento-node ${(main && "main-node") || position}`}>
            <div className="overlay">
                <h2 className="game-name">{data[index].name}</h2>
            </div>
        </div>
    );
}


export default BentoNode;