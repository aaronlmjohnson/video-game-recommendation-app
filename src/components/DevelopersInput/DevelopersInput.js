const DevelopersInput = ({data})=>{
    return (
        <div id="form-developers">
            <h1>Developers</h1>
            {data.developers.results.map((developer)=>{
                const inputName= `developers-${developer.id}`;
                return (<div className="form-genre">
                    <label htmlFor={inputName}>{developer.name}</label>
                    <input type="checkbox" name={inputName}/>
                </div>)
            })}
        </div>
    );
}

export default DevelopersInput;