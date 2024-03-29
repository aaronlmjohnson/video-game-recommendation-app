const CheckboxesListing = ({ data, setChecked, hidden })=>{
    
    const handler = (e)=>{
        setChecked(
             prevState =>{
                if(e.target.checked)
                    return [...prevState, e.target.value];
                else 
                    return prevState?.filter(option => option !== e.target.value && !e.target.checked);
            }
        )
    }

    return (
        <ul className="checkboxes">
             {
                data.map((listing, i)=>{
                    return (
                        <li className={`${i > 4 ? hidden : ''}`} key={listing.id}>
                            <input id={listing.name} name={listing.name} type="checkbox" onChange={handler} value={listing.id}/>
                            <label htmlFor={listing.name}>{listing.name}</label>
                        </li>
                    );
                })
             }
        </ul>
    )
}

export default CheckboxesListing;