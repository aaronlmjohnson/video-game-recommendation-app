import Spline from '@splinetool/react-spline';
import { useState, useRef } from "react";



const SplineSceneHandler = ()=>{
    // const dice = useRef();
    // const year = useRef();
    const CURRENT_YEAR = new Date(Date.now()).getFullYear();
    const STARTING_YEAR = 1972;
    const [year, setYear] = useState(CURRENT_YEAR);
    
    const onLoad = (spline)=>{

        // dice.current = spline.findObjectByName('Dice');
        // year.current = spline.findObjectByName('spline-year');
    }

    const openRandomGame = ()=>{
        console.log("load random game");
    }

    const openFindGameForm = (e)=>{
        console.log(e.target);
    }

    const handleYear = (newYear)=>{
        if(newYear > CURRENT_YEAR) return CURRENT_YEAR;
        if(newYear < STARTING_YEAR) return STARTING_YEAR;
        return newYear;
    }

    const handleInput =  (e)=>{
        const objName = e.target.name;
        if(objName === "Dice")console.log("random game");
        if(objName === "Search")console.log("find a game");
        if(objName === "arrow-left")setYear(prevState => handleYear(prevState - 1));
        if(objName === "arrow-right")setYear(prevState => handleYear(prevState + 1));

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
            onMouseDown={handleInput}
        />
    )
}
//(e.target.name === "Dice" && openRandomGame()) || (e.target.name === "Search" && openFindGameForm(e))
export default SplineSceneHandler;
