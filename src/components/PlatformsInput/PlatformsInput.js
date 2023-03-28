const PlatformsInput = ({data, seeMore})=>{

    return (
        <div id="form-platforms">
            <h1>Platforms</h1>
            {data.platforms.results.map((platform, i)=>{
                if(i >= 6 && !seeMore) return;

                const inputName = `platforms-${platform.id}`;
                return (<div className="form-platform" key={platform.id}>
                    <input type="checkbox" name={inputName}/>
                    <label htmlFor={inputName}>{platform.name}</label>
                </div>);
            })}
            
        </div>
    );
}

export default PlatformsInput;