import "./YearSelectionForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const YearSelectionForm = ({year, setYear, url, refetch})=>{
    const MAX_YEAR = new Date().getFullYear();
    const MIN_YEAR = 1971;

    const incrementYear = (e)=>{ 
        e.preventDefault();
        if(year + 1 > MAX_YEAR) return;
        setYear(prevYear => prevYear += 1);
    }
    const decrementYear = (e)=>{ 
        e.preventDefault();
        if(year - 1 <= MIN_YEAR) return;
        setYear(prevYear => prevYear -= 1);
    }

    const updateYearData = (e)=>{
        e.preventDefault();
        const endpoint = `&dates=${year}-01-01,${year}-12-31&page_size=16`;
        refetch(url + endpoint);
    }

    return (
        <div id="year-selection">
            
            <form onSubmit={(e)=> updateYearData(e)}> 
                <button type="button" className= "year-button" onClick={(e)=>incrementYear(e)}>
                    <FontAwesomeIcon className="year-select-caret" icon={faCaretUp} />
                </button>
                <input 
                    id="year-selection-input"
                    type="number" 
                    min="1971" 
                    max="2023"
                    value={year}
                    onChange={(e)=>setYear(parseInt(e.target.value))}
                />
                <button type="button" className= "year-button" onClick={(e)=>decrementYear(e)}>
                    <FontAwesomeIcon className="year-select-caret" icon={faCaretDown}  />
                </button>
            </form> 
        </div> 
    );
}
export default YearSelectionForm;