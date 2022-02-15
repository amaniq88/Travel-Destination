import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import {Routes, Route, Link} from 'react-router-dom'
import TourDetails from './components/TourDetails/TourDetails';
import TravelData from './data/db.json';




function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home data={TravelData} />} />
      <Route path="/tour/:id" element={<TourDetails  data={TravelData }/>} /> 
    </Routes>
    </div>
    

  );
}

export default App;