import BentoSubContainer from "./BentoSubContainer";
import BentoNode from "./BentoNode";

const BentoContainer = (props)=>{
    const maxDepth = 4;
    return (
        <main className="bento-container">
             <BentoSubContainer
                depth={1}
                maxDepth={maxDepth}
            />
            <section className={`bento-sub-container`}>
                <BentoNode />
                <BentoNode />
            </section>
        </main>
    );
}
    

export default BentoContainer;