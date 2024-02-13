import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import DeveloperOptions from "./DeveloperOptions";
import GenreOptions from "./GenreFilterOptions";
import PlatformOptions from "./PlatformOptions";

const GameFilterOptions = ()=>{
    const [form, setForm] = useState({
        platforms:"",
        developers:"",
        genres:"",
        dateRange:""
    });

    useEffect(()=>{
        console.log("form:", form);
    },[form])

    const handleFormChange = ()=>{

    }

    return (
        form && <div className="game-filter-options">
            <PlatformOptions 
                form={form}
                setForm={setForm}
            />
            <GenreOptions />
            <DeveloperOptions />
            <DateRange />
        </div>
    )
}

export default GameFilterOptions;