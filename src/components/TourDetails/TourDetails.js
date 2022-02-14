import './TourDetails.css';
import { Link, useParams } from 'react-router-dom';


function TourDetails(props){
   useParams = props.ID;
        
        return (
            <>
               <Link to="/city/:{useParams}">Home</Link>
             </>
      
        )
    }
export default TourDetails;