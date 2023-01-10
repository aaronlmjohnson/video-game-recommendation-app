import "./YearSelectionForm.css";

const YearSelectionForm = ({year, updateYear, changePopularYearData})=>{
    return (
        <div id="year-selection">
            <h1 id="year-selection-title">Popular Games of {year}</h1>

            <form onSubmit={(e)=> changePopularYearData(e)}>
                <input 
                type="number" 
                min="1971" 
                max="2023"
                value={year}
                onChange={(e)=>updateYear(e.target.value)}
                />
                <input type="submit" />
            </form> 
        </div> 
    );
}
export default YearSelectionForm;