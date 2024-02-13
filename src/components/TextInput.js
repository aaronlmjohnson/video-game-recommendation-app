const TextInput = (name, label)=>{
    return (
        <li className="search-form-input">
            <label for={name}>{label}</label>
            <input type="text" name={name} />
        </li>
    )
}

export default TextInput;