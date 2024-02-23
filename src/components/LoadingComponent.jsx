import Animation from "../scripts/Animation";
const { WavyText } = Animation;

const LoadingComponent = ()=>{

    return (
        <div className="loading-component">
            <WavyText text={"Loading..."} classList={"loading-text"}/>
        </div>
    );
}

export default LoadingComponent