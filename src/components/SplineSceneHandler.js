import Spline from '@splinetool/react-spline';
import { useState, useRef } from "react";



const SplineSceneHandler = ()=>{
    const dice = useRef();
    const canvas = document.getElementsByTagName("canvas")[0];
    const onLoad = (spline)=>{

        dice.current = spline.findObjectByName('Dice');
        console.log(dice);
    }

    return (
        <Spline 
            scene="https://prod.spline.design/8ZQHWZ1fq9bMkvYw/scene.splinecode" 
            onLoad={onLoad}
            style={
                {
                    "height": "calc(100% - 20px)",
                }
            }
        />
    )
}

export default SplineSceneHandler;
