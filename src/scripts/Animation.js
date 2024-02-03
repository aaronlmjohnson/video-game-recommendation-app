const Animation = (()=>{

    const WavyText = ({ text })=>{
        const element = <h1>{text.split('').map((char, i)=> {
            return (<span style={
                {
                    '--i': i
                }
            }>
                    {char}
                </span>)
        })}</h1>;

        return (
            element
        )
    }

    return {
        WavyText
    }
})();

export default Animation;