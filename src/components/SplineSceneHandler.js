import Spline from '@splinetool/react-spline';
import { useState, useRef } from "react";



const SplineSceneHandler = ()=>{
    const dice = useRef();

    const onLoad = (spline)=>{
        dice.current = spline.findObjectByName('Dice');
        console.log(dice);
    }

    return (
        <Spline 
            scene="https://prod.spline.design/L5w1gdU9GPblzZPb/scene.splinecode" 
            onLoad={onLoad}
        />
    )
}

export default SplineSceneHandler;