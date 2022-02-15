import './Tours.css';
import { Link } from 'react-router-dom';
import Tour from './tour/Tour';


const Tours=({tours})=>{
   
    return(
        <div className="tour-list">
          {
            tours.map((tour)=>(
              <div className='tour-previw' key={tour.id}>
                <Link to ={`/tour/${tour.id}`}>
                  <Tour tour = {tour} />
                  </Link>
                  </div>            
    ))
          }
        </div>
        
            
    );
}

export default Tours;