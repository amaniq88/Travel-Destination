import './Tour.css';
import { useState } from 'react';
import TourDetails from '../../TourDetails/TourDetails';



function Tour(props){
    const [click, setClick] = useState(0);
    function handleClick(){
        // alert('you are logged in !!')
        setClick(!click);
        console.log(click);

        
    }

    return(
        <>
        {
            props.data.map(trv=>{
                return(
                    <>
                    <h1>Name : {trv.name} </h1>
                    <img src={trv.image} onClick={handleClick} />
                    if (click ==  true ){
                    <TourDetails ID={trv.name}/>
                    }
                    </>
                );
            })
        }
          
        </>
        
            
    );
}

export default Tour;