import './App.css';
import Home from './components/home/Home';

import TravelData from './data/db.json';


function App() {
  return (
    <div>
      <Home data = {TravelData}/>
    </div>
    

  );
}

export default App;
