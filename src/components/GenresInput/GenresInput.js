const GenresInput = ({data})=>{
    return (
        <div id="form-genres">
            <h1>Genres</h1>
            {data.genres.results.map((genre)=>{
                const inputName =`genres-${genre.id}`;
                return (<div className="form-genre">
                    <label htmlFor={inputName}>{genre.name}</label>
                    <input type="checkbox" name={inputName}/>
                </div>)
            })}
        </div>
    );
}

export default GenresInput;