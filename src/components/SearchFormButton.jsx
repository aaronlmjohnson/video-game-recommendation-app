import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'


const SearchFormButton = ({ setSearchFormOpen })=>{
    const [headerActive, setHeaderActive] = useState(false);

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