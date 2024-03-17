import Animation from "../scripts/Animation";
const { WavyText } = Animation;

const LoadingScreen = ()=>{
    return(<div className="loading-screen">
        
            <WavyText 
                text={"Loading..."}
            />
        
    </div>);
}

export default LoadingScreen;