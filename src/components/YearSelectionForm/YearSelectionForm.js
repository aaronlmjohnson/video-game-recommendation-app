const YearSelectionForm = ({year, updateYear})=>{
    return (
        <form>
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