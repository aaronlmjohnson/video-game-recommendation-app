import { useContext, useState, useEffect } from "react";
import GameFilterOptions from "./GameFilterOptions";
import GameSearchField from "./GameSearchField";
import useGameDataContext from "../customHooks/useGameDataContext";

const GameSearchForm = ({ setSearchFormOpen })=>{
    const [displayFilters, setDisplayFilters] = useState(false);
    const {GAMES_URL, refetchFrontPageData} = useGameDataContext();

    const [form, setForm] = useState({
        platforms:"",
        developers:"",
        genres:"",
        dates:"",
        search:"",
    });

    const handleFilters = (e)=>{
        e.preventDefault();
        setDisplayFilters(prevState=> prevState ? false : true);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let query = "";
        for(let property in form) {
            if(form[property]) query += `&${property}=${form[property]}`
        }
        refetchFrontPageData(GAMES_URL + query + "&page_size=9");
    }
    return (
        <form className="search-form" method="GET" onSubmit={handleSubmit}>
            {displayFilters && <GameFilterOptions 
                setForm={setForm}
            />} 
             <GameSearchField
                setForm={setForm}
            />
            <button>Submit</button>
            <button onClick={()=> setSearchFormOpen(false)}>Close</button>
            <button onClick={handleFilters}>filter options</button>
        </form>
    )
}

export default GameSearchForm;