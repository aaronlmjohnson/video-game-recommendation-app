import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SearchFormButton = ()=>{
    const [headerActive, setHeaderActive] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault();
        console.log("year")
    }

    const handleHover = ()=>{
        setHeaderActive(true);
        console.log(headerActive)
    }

    const handleLeave = ()=>{
        setHeaderActive(false);
    }

    return(
        <button className="search-form-button">
            <h2 className="select-form-header">
                Search for a Game
            </h2>

                <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>       
    )
}

export default SearchFormButton;