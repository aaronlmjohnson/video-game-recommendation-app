import CheckboxesListing from "./CheckboxesListing";
import { useState, useEffect } from "react";
//data, heading, form parameter
const GameFormCheckboxes = ({ data, heading, setForm, propertyName})=>{

    const [checked, setChecked] = useState([]);

    useEffect(()=>{
        setForm((prevForm) => {
            return {...prevForm, [propertyName]: checked.join(',')}
        });
    }, [checked]);

    return (
        <div className="game-checkboxes">
             <h2>{heading}</h2>
             <CheckboxesListing 
                data={data}
                checked={checked}
                setChecked={setChecked}
             />
        </div>
    )
}

export default GameFormCheckboxes;