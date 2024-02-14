import { useContext, useState, useEffect } from "react";
import { YearContext } from "../App";
import GameFilterOptions from "./GameFilterOptions";
import GameSearchField from "./GameSearchField";

const GameSearchForm = ({ setSearchFormOpen })=>{
    const [displayFilters, setDisplayFilters] = useState(false);

    const [form, setForm] = useState({
        platforms:"",
        developers:"",
        genres:"",
        dateRange:"",
        search:"",
    });

    useEffect(()=>{
        console.log("form:", form);
    },[form])

    const handleFilters = (e)=>{
        e.preventDefault();
        setDisplayFilters(prevState=> prevState ? false : true);
    }
    return (
        <form className="search-form">
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
// display filters in app.js
export default GameSearchForm;