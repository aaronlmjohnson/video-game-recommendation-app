import { useState } from "react";

const BentoNode = ({ main, position, index, data }) => {
    const [reversing, setReversing] = useState(false);
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

    const styleBlock = ()=>{
        return { 
            'background': `hsl(${hsl[0]} ${hsl[1]} ${hsl[2]})`,
            
        }
    }

    const scaleAnimation = (e)=>{
        const targetSize = 400;
        const nodeW = e.target.offsetWidth;
        const nodeH = e.target.offsetHeight;

        const expandAnimation = [
            { transform: "scaleX(1) scaleY(1)"},
            { transform: `scaleX(${targetSize / nodeW}) scaleY(${targetSize / nodeH})`}
        ]

        const shrinkAnimation = [
            { transform: `scaleX(${targetSize / nodeW}) scaleY(${targetSize / nodeH})`},
            { transform: `scaleX(1) scaleY(1)`}
        ]

        const target = e.target;
        const finishHandler = ()=> {
                target.style.transform = `scaleX(${targetSize / nodeW}) scaleY(${targetSize / nodeH})`
        };

        const onShrinkFinish = ()=> target.style.transform = `scaleX(1) scaleY(1)`

        const onleaveHandler = ()=> e.target.animate(shrinkAnimation, timing).onfinish = onShrinkFinish;
        const targetAnimation = e.target.animate( expandAnimation, timing);

        targetAnimation.onfinish = finishHandler;

        e.target.onmouseleave = onleaveHandler
        
        
    }

    const timing = {
        duration: 500,
        iterations: 1,
      };

    //on hover determine the blocks size
    //scale in size until it reaches a size of roughly 500x500px
    //other effects???

    //need to get the current size of the node that's being hovered

    //backgroundImage: `url(${src})`

    const src = index ? data[index] : ""

    return (
        <div style={styleBlock()} className={`bento-node ${(main && "main-node") || position}`} onMouseEnter={scaleAnimation} >
            {
                main ? <MainNode /> : <></>
            }
        </div>
    );
}


export default BentoNode;