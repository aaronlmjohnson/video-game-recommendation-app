import { useState } from "react";

const PlatformsInput = ({data, toggleSeeMore})=>{
    const [seeMore, setSeeMore] = useState(false);
    //create toggle button see more
    //if count is greater than 5...8 
        //exit out of loop
        //then display see more button
    //if see more is clicked 
        //remove count restriction
    return (
        <div id="form-platforms" className="form-section">
            <h1>Platforms</h1>
            {data.platforms.results.map((platform, i)=>{
                if(i >= 6 && !seeMore) return;

                const inputName = `platforms-${platform.id}`;
                return (<div className="form-platform" key={platform.id}>
                    <input type="checkbox" name={inputName}/>
                    <label htmlFor={inputName}>{platform.name}</label>
                </div>);
            })}
            <button onClick={(e)=>{
                    setSeeMore(toggleSeeMore(seeMore, e));
                }
                }>see more</button>
        </div>
    );
}

export default PlatformsInput;