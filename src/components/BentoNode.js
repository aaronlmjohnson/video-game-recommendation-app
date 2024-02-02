const BentoNode = ({ main, position, index, data }) => {
    const hsl = [
        Math.ceil(Math.random() * 360),
        Math.ceil(Math.random() * 100),
        50 + Math.ceil(Math.random() * 20)
    ];

    const MainNode = ()=>{

        return(
            <>
                <h1>2024</h1>
            </>
        )
    }

    const src = index ? data[index] : ""

    return (
        <div style={{ backgroundImage: `url(${src})` }} className={`bento-node ${(main && "main-node") || position}`}>
            {
                main ? <MainNode /> : <></>
            }
        </div>
    );
}


export default BentoNode;