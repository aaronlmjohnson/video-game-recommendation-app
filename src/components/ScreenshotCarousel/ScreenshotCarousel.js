const ScreenshotCarousel = ({ screenshotData, mainScreenshot, setMainScreenshot })=>{

    const handleClick = (src)=> setMainScreenshot(src)
    const highlight = (src)=>(src === mainScreenshot) && "highlight";

    return (
       <div className="game-detail-carousel">
            {
                screenshotData?.results.map((screenshot, i)=>{
                    if(i < 1 && !mainScreenshot) setMainScreenshot(screenshot.image);
                    return(
                        <button className={`game-detail-carousel-button ${highlight(screenshot.image)}`} onClick={()=>handleClick(screenshot.image)}>
                            <img className="" key={screenshot.id} alt="#" src={screenshot.image} width="300px"/>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ScreenshotCarousel;