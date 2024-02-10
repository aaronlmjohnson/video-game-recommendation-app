import YearSelectionForm from "./YearSelectionForm";
import RandomGameButton from "./RandomGameButton";

const MainBentoNode = ()=>{

    return(
        <div className={`bento-node main`}>
            <YearSelectionForm />
            <RandomGameButton />
            <div></div>
        </div>
    )
}

export default MainBentoNode;