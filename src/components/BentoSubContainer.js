import BentoNode from "./BentoNode";

const BentoSubContainer = ({ depth, maxDepth }) => {
    const direction = ["horizontal", "vertical"];
    const size = ["large", "small"];

    const terminalBlock = () => {
        return (
            <>
                <section className={`bento-sub-container terminal depth-${depth + 1} ${direction[(depth + 1) % 2]} ${size[1]}`}>
                    <BentoNode position={"first"}/>
                    <BentoNode position={"second"}/>
                </section>
                {(depth + 1 === maxDepth) ? <BentoNode main={true} /> : null}
            </>
        )
    }

    const recursiveBlockFirst = () => {
        return (
            <>
                <BentoSubContainer
                    depth={depth + 1}
                    maxDepth={maxDepth}
                />
                {terminalBlock()}
            </>
        )
    }

    const terminalBlockFirst = () => {
        return (
            <>
                {terminalBlock()}
                <BentoSubContainer
                    depth={depth + 1}
                    maxDepth={maxDepth}
                />
            </>
        )
    }

    return (
        depth === maxDepth ? null :
            <section className={`bento-sub-container depth-${depth} ${direction[depth % 2]} ${size[0]}`}>
                {
                    depth % 2 === 0 ? terminalBlockFirst() : recursiveBlockFirst()
                }
            </section>
    );
}

export default BentoSubContainer;

