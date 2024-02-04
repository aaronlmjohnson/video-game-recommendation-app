import { useEffect } from "react";

const Animation = (()=>{

    const WavyText = ({ text })=>{
        const element = <h1>{text.split('').map((char, i)=> {
            return (<span key={i} style={
                        {
                            'animation': 'wavy .4s infinite linear',
                            'animationDelay': `${i * .05}s`
                        }
                    }>
                    {char}
                </span>)
        })}</h1>;

        return (element);
    }

    return {
        WavyText
    }
})();

export default Animation;

    // const scaleAnimation = (e)=>{
    //     // background is distorted when scaling think of a fix
    //     const targetSize = 400;
    //     const nodeW = e.target.offsetWidth;
    //     const nodeH = e.target.offsetHeight;

    //     const expandAnimation = [
    //         { transform: "scaleX(1) scaleY(1)", zIndex: '1000'},
    //         { transform: `scaleX(${targetSize / nodeW}) scaleY(${targetSize / nodeH})`},
    //     ]

    //     const shrinkAnimation = [
    //         { transform: `scaleX(${targetSize / nodeW}) scaleY(${targetSize / nodeH})`},
    //         { transform: `scaleX(1) scaleY(1)`, zIndex: '1'}
    //     ]

    //     const target = e.target;
    //     const finishHandler = ()=> {
    //             target.style.transform = `scaleX(${targetSize / nodeW}) scaleY(${targetSize / nodeH})`
    //             target.style.zIndex = '1000';
    //     };

    //     const onShrinkFinish = ()=> {
    //         target.style.transform = `scaleX(1) scaleY(1)`;
    //         target.style.zIndex = '1';
    //     }

    //     const onleaveHandler = ()=> e.target.animate(shrinkAnimation, timing).onfinish = onShrinkFinish;
    //     const targetAnimation = e.target.animate( expandAnimation, timing);

    //     targetAnimation.onfinish = finishHandler;

    //     e.target.onmouseleave = onleaveHandler
    // }

    // const timing = {
    //     duration: 500,
    //     iterations: 1,
    //     easing: "ease-out"
    //   };
