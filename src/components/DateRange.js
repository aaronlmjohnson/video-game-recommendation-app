import { useState, useEffect } from "react";

const DateRange = ({setForm})=>{

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(()=>{
        setForm(
            prevForm => {
                return {
                    ...prevForm, dates:`${startDate ? startDate + ',' : ""}${endDate}`
                };
            }
        );
    },[startDate, endDate])

    const handleChange = (e)=>{
        if(e.target.name === "start-date") setStartDate(e.target.value);
        else setEndDate(e.target.value);
    }
    return (
        <div className="date-range">
            <h1>Release Date:</h1>
            <div className="date-range-container">
                <label htmlFor="start-date">From:</label>
                <input type="date"  name="start-date" onChange={handleChange}/>
            </div>
            <div className="date-range-container">
                <label htmlFor="end-date">To:</label>
                <input type="date"  name="end-date"  onChange={handleChange}/>
            </div>
        </div>
    )
}

export default DateRange;