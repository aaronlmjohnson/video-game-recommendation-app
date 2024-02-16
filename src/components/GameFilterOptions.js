import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import GameFormCheckboxes from "./GameFormCheckboxes";

import useFilterOptionsContext from "../customHooks/useFilterOptionsContext";

const GameFilterOptions = ({ setForm })=>{
    const { optionsLoading, developers, platforms, genres } = useFilterOptionsContext();


    return (
        <div className="game-filter-options">
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
        </div>
    )
}

export default GameFilterOptions;