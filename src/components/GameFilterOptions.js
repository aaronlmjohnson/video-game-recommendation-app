import DateRange from "./DateRange";
import GameFormCheckboxes from "./GameFormCheckboxes";
import useGameDataContext from "../customHooks/useGameDataContext";

import useFilterOptionsContext from "../customHooks/useFilterOptionsContext";

const GameFilterOptions = ({ setForm, displayFilters, setDisplayFilters, handleSubmit })=>{
    const { developers, platforms, genres } = useFilterOptionsContext();
    const { setOverlayOn } = useGameDataContext();

    const handleClick = (e)=>{
        e.preventDefault();
        setOverlayOn(false);
        setDisplayFilters(false);
    }
    
    return (
        <>
        <div className={`game-filter-options ${!displayFilters && 'filter-options-hidden '} scroller`}>
            <GameFormCheckboxes 
                data={developers.results}
                heading={"Developers"}
                setForm={setForm}
                propertyName={"developers"}
            />
            <GameFormCheckboxes 
                data={genres.results}
                heading={"Genres"}
                setForm={setForm}
                propertyName={"genres"}
            />
            <GameFormCheckboxes 
                data={platforms.results}
                heading={"Platforms"}
                setForm={setForm}
                propertyName={"platforms"}
            />
            <DateRange 
                setForm={setForm}
            />

        <div className="filter-buttons">
            <button className="filter-button" type="submit" onClick={handleSubmit}>Search</button>
            <button className="filter-button" type="button" onClick={handleClick}>Hide</button>
        </div>
            
        </div>
    </>
    )
}

export default GameFilterOptions;