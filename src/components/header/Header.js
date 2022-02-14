import './Header.css';
import {Link} from 'react-router-dom';



function Header(){
    return(
        <>
       <nav>
            <Link to="/home">Home</Link>
      </nav>
      <br></br>
      <br></br>
      <h1>Travel Destination web application</h1>
        </>
    )
}
export default Header;