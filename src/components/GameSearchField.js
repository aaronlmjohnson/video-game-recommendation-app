import { useContext, useState } from "react";


const GameSearchField = ({ setForm })=>{
    const [displayFilters, setDisplayFilters] = useState(false);

    const handleChange = (e)=>{
        e.preventDefault();
        setForm((prevState) => {return {...prevState, search:e.target.value}})
    }
    return (
        <div className="game-search-field">
             <input type="search" size={45} placeholder="Search for games by title..." onChange={handleChange}/>
             
        </div>
    )
}
// display filters in app.js
export default GameSearchField;