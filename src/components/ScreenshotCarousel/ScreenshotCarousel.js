import useApiHandler from "../useGameAPI/useApiHandler";
import { useState } from "react";
const ScreenshotCarousel = ({ id, mainScreenshot, setMainScreenshot})=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;
    const url = `https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}&page_size=5`;

    const { data:screenshotData, loading:screenshotsLoading } = useApiHandler(url);
    const handleClick = (src)=> setMainScreenshot(src);
    return (
       screenshotsLoading ?
       <>Loading screenshots...</> :
       <div className="game-detail-carousel">
            {
                screenshotData?.results.map((screenshot, i)=>{
                    if(!mainScreenshot) {
                        //this enters and sets the screenshot 5 times do this through useeffect instead
                        setMainScreenshot(screenshot.image);
                    };
                    return(
                        <button className="game-detail-carousel-button" onClick={()=>handleClick(screenshot.image)}>
                            <img className="" key={screenshot.id} alt="#" src={screenshot.image} width="300px"/>
                        </button>
                    )
                })
            }
        </div>
    )
    
    // const isMainScreenshot = (screenshot)=>{
    //     return mainScreenshot.id === screenshot.id ? "active" : "";
    // }
    // if(mainScreenshot === undefined) return (<>Nothing here!</>);
    // return(
    //     <div id="screenshot-carousel">
    //         <img id="screenshot-carousel-main-image" src={mainScreenshot.image} alt={name}/>
    //         <ul className="screenshots">
    //             {screenshotsExist && screenshots.results.map((screenshot)=>{
    //                 return <li key={screenshot.id} >
    //                     <img 
    //                         className={`screenshot ${isMainScreenshot(screenshot)}`} 
    //                         src={screenshot.image}
    //                         onClick={()=> setMainScreenshot(screenshot)}
    //                     >
    //                     </img>
    //                 </li>
    //             })}
    //         </ul>
    //     </div>
    // );
}

export default ScreenshotCarousel;