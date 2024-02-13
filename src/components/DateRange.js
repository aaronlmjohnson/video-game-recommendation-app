const DateRange = ()=>{
    return (
        <div className="date-range">
            <h1>Release Date:</h1>
            <div className="date-range-container">
                <label for="start-date">From:</label>
                <input type="date"  name="start-date" />
            </div>
            <div className="date-range-container">
                <label for="end-date">To:</label>
                <input type="date"  name="end-date" />
            </div>
        </div>
    )
}

export default DateRange;