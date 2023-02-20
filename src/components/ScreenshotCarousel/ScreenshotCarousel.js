
const ScreenshotCarousel = ({screenshots, mainScreenshot, setMainScreenshot, name})=>{
    const isMainScreenshot = (screenshot)=>{
        return mainScreenshot.id === screenshot.id ? "active" : "";
    }

    return( 
        <div id="screenshot-carousel">
            <img id="screenshot-carousel-main-image" src={mainScreenshot.image} alt={name}/>
            <ul className="screenshots">
                {screenshots.results.map((screenshot)=>{
                    return <li key={screenshot.id} >
                        <img 
                            className={`screenshot ${isMainScreenshot(screenshot)}`} 
                            src={screenshot.image}
                            onClick={()=> setMainScreenshot(screenshot)}
                        >
                            
                        </img>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ScreenshotCarousel;