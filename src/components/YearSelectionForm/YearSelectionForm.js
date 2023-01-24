import "./YearSelectionForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const YearSelectionForm = ({year, setYear, changePopularYearData})=>{
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

    return (
        <div id="year-selection">
            {/* onSubmit={(e)=> changePopularYearData(e)} */}
            <form > 
                <button id="year-up" onClick={(e)=>incrementYear(e)}><FontAwesomeIcon icon={faCaretUp} /></button>
                <input 
                    id="year-selection-input"
                    type="number" 
                    min="1971" 
                    max="2023"
                    value={year}
                    onChange={(e)=>setYear(e.target.value)}
                />
                <button id="year-down" onClick={(e)=>decrementYear(e)}><FontAwesomeIcon icon={faCaretDown}  /></button>
            </form> 
        </div> 
    );
}
export default YearSelectionForm;