const PlatformsInput = ({data})=>{
    return (
        <div id="form-platforms" className="form-section">
            <h1>Platforms</h1>
            {data.platforms.results.map((platform)=>{
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