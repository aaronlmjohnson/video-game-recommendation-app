const YearSelectionForm = ({year, updateYear, changePopularYearData})=>{
    return (
        <form onSubmit={(e)=> {
                e.preventDefault();
                changePopularYearData();
            }
        }>
            <input 
            type="number" 
            min="1971" 
            max="2022"
            value={year}
            onChange={(e)=>updateYear(e.target.value)}
            />
            <input type="submit" />
        </form>  
    );
}
export default YearSelectionForm;