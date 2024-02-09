import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const YearSelectionForm = ()=>{
    const handleYear = (e)=>{
        e.preventDefault();
        console.log("year")
    }
    return(
        <div className="year-selection-form-container">
            <form className="year-selection-form">
                <div className="year-container">
                    <button onClick={handleYear}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <input value={2024} />
                    <button onClick={handleYear}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            
            <button className="submit" type="submit">
                Search
            </button>
        </form>
        </div>
       
    )
}

export default YearSelectionForm;