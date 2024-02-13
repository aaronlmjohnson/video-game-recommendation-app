import DeveloperOptions from "./DeveloperOptions";
import GenreOptions from "./GenreFilterOptions";
import PlatformOptions from "./PlatformOptions";


const GameFilterOptions = ()=>{

    
    return (
        <div className="game-filter-options">
            <PlatformOptions />
            <GenreOptions />
            <DeveloperOptions />
        </div>
    )
}

export default GameFilterOptions;