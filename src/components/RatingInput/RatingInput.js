const RatingInput = ({data})=>{

    const updateRating = (e)=>{
        document.getElementById("textInput").value = e.target.value;
    }
    
    return (
        <div id="form-rating"> 
            <label htmlFor="metacritic">Rating:</label>
            <input type="range" name="metacritic" min="0" max="100" onChange={updateRating}/>
            <input type="text" id="textInput" value="" ></input>
        </div>
    );
}

export default RatingInput;