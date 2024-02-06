import { useState } from "react";
import { Application } from '@splinetool/runtime';

import Spline from '@splinetool/react-spline';



const BentoNode = ({ main, position, index, data }) => {
    const [reversing, setReversing] = useState(false);
    const hsl = [
        Math.ceil(Math.random() * 360),
        Math.ceil(Math.random() * 100),
        50 + Math.ceil(Math.random() * 20)
    ];


    const MainNode = ()=>{

        return(
            <div className={`bento-node main-node`}>
                <button className="spline-button">
                    <Spline scene="https://prod.spline.design/L5w1gdU9GPblzZPb/scene.splinecode" className="spline-div"/>
                </button>
            </div>
            
        )
    }

    const styleBlock = ()=>{
        return {
            'backgroundImage' : `url(${src})`,
            // 'background': `hsl(${hsl[0]} ${hsl[1]} ${hsl[2]})`,
            
        }
    }


    
    const src = index ? data[index].src : ""

    return (
        main ?
        <MainNode /> :
        <div style={styleBlock()} className={`bento-node ${(main && "main-node") || position}`}>
            <div className="overlay">
                <h2 className="game-name">{data[index].name}</h2>
            </div>
        </div>
    );
}


export default BentoNode;