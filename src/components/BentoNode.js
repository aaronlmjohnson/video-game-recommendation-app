import { useState } from "react";

import MainBentoNode from "./MainBentoNode";

const BentoNode = ({data, main}) => {
    console.log(data)
    return (
        <div className={`bento-node ${main ? 'main' : ''}`}>
        </div>
    );
}


export default BentoNode;