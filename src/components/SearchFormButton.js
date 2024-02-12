import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { YearContext } from '../App';

const SearchFormButton = ()=>{
    const [headerActive, setHeaderActive] = useState(false);

    const { setSearchFormOpen } = useContext(YearContext);

    const handleClick = (e)=>{
        e.preventDefault();
        setSearchFormOpen(true);
    }

    const handleHover = ()=>{
        setHeaderActive(true);
    }

    const handleLeave = ()=>{
        setHeaderActive(false);
    }

    return(
        <button className="search-form-button" onClick={handleClick}>
            <h2 className="select-form-header">
                Search for a Game
            </h2>

                <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>       
    )
}

export default SearchFormButton;