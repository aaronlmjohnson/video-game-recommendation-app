import YearSelectionForm from "./YearSelectionForm";
import RandomGameButton from "./RandomGameButton";
import SearchFormButton from "./SearchFormButton";
import { useState } from "react";
import GameSearchForm from "./GameSearchForm";

const MainBentoNode = ()=>{
    const [searchFormOpen, setSearchFormOpen] = useState(false);

    return(
       
        <div className={`bento-node main`}>
            {
                searchFormOpen ?
                <GameSearchForm 
                    setSearchFormOpen={setSearchFormOpen}
                /> :
                <>
                    <YearSelectionForm />
                    <div className="random-game-button-container">
                        <h2>See a Random Game</h2>
                        <RandomGameButton />
                    </div>
                    
                    
                    <SearchFormButton 
                        setSearchFormOpen={setSearchFormOpen}
                    />
                </>
            }

        </div>
    )
}

export default MainBentoNode;