import { useContext } from "react";
import { YearContext } from "../App";

const GameSearchForm = ({ setSearchFormOpen })=>{

    
    return (
        <form className="search-form">
             <input type="search" placeholder="Search for games, developers, genres and more..."/>
            <button>Submit</button>
            <button onClick={()=> setSearchFormOpen(false)}>Close</button>
        </form>
    )
}

export default GameSearchForm;