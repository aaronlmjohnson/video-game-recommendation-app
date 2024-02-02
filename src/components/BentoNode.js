const BentoNode = ({main})=>{
    const hsl = [
        Math.ceil(Math.random() * 360),
        Math.ceil(Math.random() * 100),
        50 + Math.ceil(Math.random() * 20)
    ];

    return (
        <div style={{background: `hsl(${hsl[0]} ${hsl[1]} ${hsl[2]})`}}className={`bento-node ${(main && "main-node") || ""}`}>

        </div>
    );
}
    

export default BentoNode;