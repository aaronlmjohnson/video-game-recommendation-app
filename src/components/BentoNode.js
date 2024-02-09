import { useState } from "react";

import MainBentoNode from "./MainBentoNode";

const BentoNode = ({data, main}) => {
    return (
        main ? 
        <div className={`bento-node main`}>

        </div> :
        <div className={`bento-node `}>
            <img src={data.src} alt={"image"}/>
        </div>
    );
}


export default BentoNode;