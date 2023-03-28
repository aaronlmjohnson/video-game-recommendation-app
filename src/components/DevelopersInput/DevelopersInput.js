const DevelopersInput = ({data})=>{
    return (
        <div id="form-developers" className="form-section">
            <h1>Developers</h1>
            {data.developers.results.map((developer)=>{
                const inputName= `developers-${developer.id}`;
                return (<div className="form-genre">
                    <input type="checkbox" name={inputName}/>
                    <label htmlFor={inputName}>{developer.name}</label>
                </div>)
            })}
        </div>
    );
}

export default DevelopersInput;