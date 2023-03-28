const ReleaseDateInput = ({data})=>{
    return (
        <div id="form-released" className="form-section">
            <h1>Release Date</h1>
            <div id="form-released-start" >
                <input type="date" name="start-date"/>
            </div>
            to
            <div id="form-released-end" >
                <input type="date" name="end-date"/>
            </div>
        </div>
    );
}

export default ReleaseDateInput;