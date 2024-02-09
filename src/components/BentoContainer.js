import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";


const BentoContainer = ({ data })=>{
    const handleNodes = (count)=>{
        const nodeArr = [];

        for(let i = 0; i < count; i++){
            
        }
    }
    return (
        data ? 
        <main className="bento-container">
             <BentoSubContainer
                classList={"zero "}
                bentoNodes={handleNodes()}
            />
            <BentoSubContainer
                classList={"zero "}
            />
        </main> :
        <></>
    );
}
    

export default BentoContainer;

