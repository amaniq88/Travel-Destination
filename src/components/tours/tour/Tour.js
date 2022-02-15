import './Tour.css';
import React from 'react';



const Tour = ({tour})=>{      

    return(
        <div className='tour'>
            <h2>{tour.name}</h2>
        <div className='tour-image'>
            <img src={tour.image} alt="tour" />
        </div> 
        </div>
        
            
    );
}

export default Tour;