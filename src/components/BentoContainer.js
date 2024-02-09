import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";


const BentoContainer = ({ data })=>{
    const handleNodes = (count)=>{
        const nodeArr = [];
        //handle adding data
        for(let i = 0; i < count; i++){
            nodeArr.push(
                <BentoNode 
                
                />
            )
        }
        return nodeArr;
    }

    return (
        data ? 
        <main className="bento-container">
          <section className={`bento-sub-container zero top left`}>
            <BentoSubContainer 
                classList = {"bento-sub-container one top"}
                bentoNodes={handleNodes(2)}
            />
            <BentoSubContainer 
                classList = {"bento-sub-container one bottom"}
                bentoNodes={handleNodes(2)}
            />
          </section>
          <BentoSubContainer 
            classList = {"bento-sub-container zero top"}
            bentoNodes={handleNodes(2)}
          />
          <BentoSubContainer 
            classList = {"bento-sub-container zero bottom"}
            bentoNodes={handleNodes(4)}
          />
        </main> :
        <></>
    );
}
    

export default BentoContainer;

