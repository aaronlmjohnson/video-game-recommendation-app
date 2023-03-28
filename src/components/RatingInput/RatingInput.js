const RatingInput = ({data})=>{

    const updateRating = (e)=>{
        document.getElementById("textInput").value = e.target.value;
    }
    
    return (
        <div id="form-rating" className="form-section"> 
            <label htmlFor="metacritic"><h1>Rating:</h1></label>
            <input type="range" name="metacritic" min="0" max="100" onChange={updateRating}/>
            {/* <input type="text" id="textInput" value="" ></input> */}
        </div>
    );
}

export default RatingInput;