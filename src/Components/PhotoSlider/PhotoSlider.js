import React from 'react';
import PhotoSlide from '../PhotoSlide/PhotoSlide';
import './PhotoSlider.css'
import Carousel from 'react-bootstrap/Carousel';



const PhotoSlider = (props) => {

  const renderSlider = () => (
    
      props.data.map((item, i) => {
        return (
          <PhotoSlide item={item} key={i} />
        )
      })
  )
  
  return (
      <div className='containter py-3'>
         
            <div className='row'>
              <Carousel className='d-inline'>
                <Carousel.Item>
                  {renderSlider()}
                </Carousel.Item>
              </Carousel>
            </div>
         </div>
      
    );
  }

export default PhotoSlider;