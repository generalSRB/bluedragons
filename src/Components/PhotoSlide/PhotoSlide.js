import React, {Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';



const PhotoSlide = (props) => {
    return (
        
            <img className="d-block w-100" src={props.item.image} alt='/'/>
        
        
    )
}

export default PhotoSlide;
