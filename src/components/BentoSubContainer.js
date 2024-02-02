import BentoNode from "./BentoNode";

const BentoSubContainer = ({ depth, maxDepth})=>{
    console.log(depth)
    const direction =["horizontal", "vertical"];
    const size = ["small", "large"];
    
    const terminalBlock = ()=>{
        return(
            <>
                <section className={`bento-sub-container depth-${depth + 1} ${direction[(depth + 1) % 2]} ${size[(depth + 1) % 2]}`}>
                    <BentoNode />
                    <BentoNode />
                </section> 
                {(depth + 1 === maxDepth) ? <BentoNode main={true}/> : null}
            </>
             
        )
    }

    const recursiveBlockFirst = ()=>{
        return(
            <>
                <BentoSubContainer 
                    depth = { depth + 1 }
                    maxDepth = { maxDepth }
                />
                {terminalBlock()}
            </>
        )
    }

    const terminalBlockFirst = ()=>{
        return(
            <>
                {terminalBlock()}
                <BentoSubContainer 
                    depth = { depth + 1 }
                    maxDepth = { maxDepth }
                />
            </>
        )
    }

    return (
        depth === maxDepth ? null :
        <section className={`bento-sub-container depth-${depth} ${direction[depth % 2]} ${size[(depth + 1)  % 2]}`}> 
            {
                depth % 2 === 0 ? terminalBlockFirst() : recursiveBlockFirst()
            }
        </section>
    );
}
    

export default BentoSubContainer;