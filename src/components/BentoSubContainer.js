import BentoNode from "./BentoNode";

const BentoSubContainer = ({ classList, bentoNodes}) => {
    
    console.log(bentoNodes);
    return (
        <section className={`bento-sub-container ${classList}`}>
            {bentoNodes.map((node)=> node )}
        </section>
    );
}

export default BentoSubContainer;

