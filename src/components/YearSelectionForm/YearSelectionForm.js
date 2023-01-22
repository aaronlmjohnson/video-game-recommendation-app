import "./YearSelectionForm.css";

const YearSelectionForm = ({year, updateYear, changePopularYearData})=>{
    return (
        <div id="year-selection">
            <form onSubmit={(e)=> changePopularYearData(e)}>
                <input 
                    id="year-selection-input"
                    type="number" 
                    min="1971" 
                    max="2023"
                    value={year}
                    onChange={(e)=>updateYear(e.target.value)}
                />
            </form> 
        </div> 
    );
}
export default YearSelectionForm;