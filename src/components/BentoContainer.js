import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";

const BentoContainer = ({ data })=>{

    const handleNodes = (dataStart, dataEnd)=>{
        const dataSegment = data.slice(dataStart, dataEnd);

        const nodes = dataSegment.map((dataItem)=>{
          return (
            <BentoNode 
              data={dataItem}
            />
          )
        })
        return nodes.length === 1 ? [...nodes, <BentoNode main={true}/>] : nodes;
    }

    return (
        data ? 
        <main className="bento-container">
          <section className={`bento-sub-container zero top left`}>
            <BentoSubContainer 
                classList = {"bento-sub-container one top"}
                bentoNodes={handleNodes(6, 8)}
            />
            <BentoSubContainer 
                classList = {"bento-sub-container one bottom"}
                bentoNodes={handleNodes(8, 10)}
            />
          </section>
          <BentoSubContainer 
            classList = {"bento-sub-container zero top"}
            bentoNodes={handleNodes(0, 2)}
          />
          <BentoSubContainer 
            classList = {"bento-sub-container zero bottom"}
            bentoNodes={handleNodes(2, 6)}
          />
        </main> :
        <></>
    );
}
    
export default BentoContainer;

