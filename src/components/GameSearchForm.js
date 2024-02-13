import { useContext } from "react";
import { YearContext } from "../App";

const GameSearchForm = ()=>{
    const { setSearchFormOpen } = useContext(YearContext);
    const searchFormInputs = [
        {type:"text", name:"byName", label: "Search for a game by name, developer, genre, and more..."},
        {type:"text", name:"byName", label: "Search for a game by name, developer, genre, and more..."},

    ]
    return (
        <form className="search-form">
            <div>
                <input type="search" placeholder="Search for games, developers, genres and more..."/>
            </div>
            <ul>
                
            </ul>
            <button>Submit</button>
            <button onClick={()=> setSearchFormOpen(false)}>Close</button>
            
        </form>
    )
}

export default GameSearchForm;