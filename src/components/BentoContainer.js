import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";


const BentoContainer = ({ data })=>{
    const maxDepth = 4;
    return (
        data ? 
        <main className="bento-container">
             <BentoSubContainer
                depth={1}
                maxDepth={maxDepth}
                data={data}
            />
            <section className={`bento-sub-container depth-${1}`}>
                <BentoNode position={"first"} index={"0"} data={data}/>
                <BentoNode position={"second"} index={1} data={data}/>
            </section>
        </main> :
        <></>
    );
}
    

export default BentoContainer;

