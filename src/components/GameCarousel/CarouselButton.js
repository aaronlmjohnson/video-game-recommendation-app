import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const CarouselButton = (props)=>{
    const {setShift, setShiftClass, direction} = props;
    return(
        <button className={`carousel-button carousel-${direction}`} onClick={()=> {
            setShiftClass(`shift-${direction}`);
            setShift(prev => prev -= 1);
        }}>
            <FontAwesomeIcon className="carousel-caret" icon={direction === "left" ? faCaretLeft : faCaretRight} />
        </button>
    )
}

export default CarouselButton;