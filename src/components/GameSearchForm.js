import { useContext } from "react";
import { YearContext } from "../App";

const GameSearchForm = ()=>{
    const { setSearchFormOpen } = useContext(YearContext);
    return (
        <form className="search-form">
            Look for games...
            <button>Submit</button>
            <button onClick={()=> setSearchFormOpen(false)}>Close</button>
            
        </form>
    )
}

export default GameSearchForm;