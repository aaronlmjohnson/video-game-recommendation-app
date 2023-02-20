
const ScreenshotCarousel = ({screenshots, mainScreenshot, setMainScreenshot, name})=>{
    return( 
        <div id="screenshot-carousel">
            <img id="screenshot-carousel-main-image" src={mainScreenshot} alt={name}/>
            <ul className="screenshots">
                {screenshots.results.map((screenshot)=>{
                    return <li key={screenshot.id} >
                        <img className="screenshot" src={screenshot.image}></img>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ScreenshotCarousel;