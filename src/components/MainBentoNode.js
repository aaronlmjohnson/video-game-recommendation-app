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
                    <RandomGameButton  header={"See a Random Game"} classList={"home"}/>
                    
                    
                    <SearchFormButton 
                        setSearchFormOpen={setSearchFormOpen}
                    />
                </>
            }

        </div>
    )
}

export default MainBentoNode;