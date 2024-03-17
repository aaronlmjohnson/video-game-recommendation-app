import CheckboxesListing from "./CheckboxesListing";
import { useState, useEffect } from "react";

const GameFormCheckboxes = ({ data, heading, setForm, propertyName})=>{

    const [checked, setChecked] = useState([]);
    const [hidden, setHidden] = useState('hidden');

    useEffect(()=>{
        setForm((prevForm) => {
            return {...prevForm, [propertyName]: checked.join(',')}
        });
    }, [checked]);

    const handleToggle = (e)=>{
        e.preventDefault();
        setHidden(prevState => prevState === 'hidden' ? '' : 'hidden')
    }

    return (
        <div className="game-checkboxes">
             <h2>{heading}</h2>
             <CheckboxesListing 
                data={data}
                setChecked={setChecked}
                hidden={hidden}
             />
             <button className="filter-toggle" type="button" onClick={handleToggle}>{hidden ? "See More ▼" : "See Less ▲"}</button>
        </div>
    )
}

export default GameFormCheckboxes;