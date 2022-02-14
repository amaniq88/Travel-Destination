import './Tours.css';
import Tour from './tour/Tour';


function Tours(props){
   
    return(
        <>
      <Tour data = {props.data}/>
        </>
        
            
    );
}

export default Tours;