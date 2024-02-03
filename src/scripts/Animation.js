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