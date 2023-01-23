import "./YearSelectionForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const YearSelectionForm = ({year, updateYear, changePopularYearData})=>{
    
    return (
        <div id="year-selection">
            <form onSubmit={(e)=> changePopularYearData(e)}>
                <button id="year-up"><FontAwesomeIcon icon={faCaretUp} /></button>
                <input 
                    id="year-selection-input"
                    type="number" 
                    min="1971" 
                    max="2023"
                    value={year}
                    onChange={(e)=>updateYear(e.target.value)}
                />
                <button id="year-down"><FontAwesomeIcon icon={faCaretDown} /></button>
            </form> 
        </div> 
    );
}
export default YearSelectionForm;