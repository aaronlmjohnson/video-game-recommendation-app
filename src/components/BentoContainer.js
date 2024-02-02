import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";

const BentoContainer = (props)=>{
    const maxDepth = 4;
    console.log("terminal depth:", 1);
    return (
        <main className="bento-container">
             <BentoSubContainer
                depth={1}
                maxDepth={maxDepth}
            />
            <section className={`bento-sub-container depth-${1} vertical small`}>
                <BentoNode />
                <BentoNode />
            </section>
        </main>
    );
}
    

export default BentoContainer;