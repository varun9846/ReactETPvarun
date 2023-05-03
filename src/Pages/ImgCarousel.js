import React, { useState, useEffect } from 'react';
import {Images} from './Images'
export const ImgCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(currentImageIndex);
  }, [currentImageIndex]);

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex - 1);
    if(currentImageIndex<=0)
    {
         setCurrentImageIndex(0);
     }
  };

  const handleNextClick = () => {
    
    if(currentImageIndex<=3)
    {
      setCurrentImageIndex(currentImageIndex + 1);

    }
    else if(currentImageIndex>=4){
      setCurrentImageIndex(0);

    }
    
  };

  return (
    <div>
     
         <div className="imgc">
          <div className="imginner" style={{backgroundImage: `url(${Images[currentImageIndex].img})`}}>
   </div>
   <h3>{currentImageIndex+1}</h3> 
      </div>
      <div className="btni" id='bti2'>
      <button onClick={handlePrevClick}>Prev</button>
      </div>
      <div className="btni" id='bti1'>
      <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

