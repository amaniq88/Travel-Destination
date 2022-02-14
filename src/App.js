import './App.css';
import Home from './components/home/Home';
import TravelData from './data/db.json';
import {Routes, Route} from 'react-router-dom'
import TourDetails from './components/TourDetails/TourDetails';



function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/city/:id" element={<TourDetails />} /> 
    </Routes>
      <Home data = {TravelData}/>
    </div>
    

  );
}

export default App;