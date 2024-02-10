import YearSelectionForm from "./YearSelectionForm";
import RandomGameButton from "./RandomGameButton";
import SearchFormButton from "./SearchFormButton";

const MainBentoNode = ()=>{

    return(
        <div className={`bento-node main`}>
            <YearSelectionForm />
            <RandomGameButton />
            <SearchFormButton />
        </div>
    )
}

export default MainBentoNode;