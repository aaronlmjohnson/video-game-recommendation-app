const BentoNode = ({main})=>{
    return (
        <div className={`bento-node ${main && "main-node" || ""}`}>

        </div>
    );
}
    

export default BentoNode;