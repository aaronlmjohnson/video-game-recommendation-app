const CheckboxesListing = ({ data })=>{

    return (
        <ul className="checkboxes">
             {
                data.map((listing)=>{
                    return (
                        <li key={listing.id}>
                            <input name={listing.name} type="checkbox"/>
                            <label for={listing.name}>{listing.name}</label>
                        </li>
                    );
                })
             }
        </ul>
    )
}

export default CheckboxesListing;