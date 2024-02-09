import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";


const BentoContainer = ({ data })=>{
    const maxDepth = 4;
    return (
        data ? 
        <main className="bento-container">
             <BentoSubContainer
                classList={"zero "}
            />
        </main> :
        <></>
    );
}
    

export default BentoContainer;

