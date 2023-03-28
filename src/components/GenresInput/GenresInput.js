const GenresInput = ({data, seeMore})=>{
    return (
        <div id="form-genres" className="form-section">
            <h1>Genres</h1>
            {data.genres.results.map((genre, i)=>{
                if(i >= 6 && !seeMore) return;
                const inputName =`genres-${genre.id}`;
                return (<div className="form-genre">
                    <input type="checkbox" name={inputName}/>
                    <label htmlFor={inputName}>{genre.name}</label>
                </div>)
            })}
        </div>
    );
}

export default GenresInput;