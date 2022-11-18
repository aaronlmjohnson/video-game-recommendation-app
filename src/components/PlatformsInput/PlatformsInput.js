const PlatformsInput = ({data})=>{
    return (
        <div id="form-platforms">
            <h1>Platforms</h1>
            {data.platforms.results.map((platform)=>{
                const inputName = `platforms-${platform.id}`;
                return (<div className="form-platform" key={platform.id}>
                    <label htmlFor={inputName}>{platform.name}</label>
                    <input type="checkbox" name={inputName}/>
                </div>);
            })}
        </div>
    );
}

export default PlatformsInput;