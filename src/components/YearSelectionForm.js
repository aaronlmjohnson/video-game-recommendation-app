import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import useYearContext from '../customHooks/useYearContext'
import useGameDataContext from '../customHooks/useGameDataContext';

const YearSelectionForm = ()=>{
    const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

    const {year, setYear, FIRST_YEAR, CURRENT_YEAR } = useYearContext();
    const api_url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&dates=${year}-01-01,${year}-12-31&page_size=9`
    const { refetchFrontPageData } = useGameDataContext();

    const handleYear = (e)=>{
        e.preventDefault();
        const direction = e.currentTarget.classList[0];

        if(direction === "left")
            setYear(prevYear => prevYear - 1 < FIRST_YEAR ? FIRST_YEAR : prevYear - 1);
        else 
            setYear(prevYear => prevYear + 1 > CURRENT_YEAR ? CURRENT_YEAR : prevYear + 1);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        refetchFrontPageData(api_url);
    }

    return(
        <div className="year-selection-form-container">
            <form className="year-selection-form" onSubmit={handleSubmit}>
                <div className="year-container">
                    <button className="left" onClick={handleYear}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <p className="year-text">{year}</p>
                    <button className="right" onClick={handleYear}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            
            <input className="submit" type="submit" value={"Search"} />
        </form>
        </div>
       
    )
}

export default YearSelectionForm;