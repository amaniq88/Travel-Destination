import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Tour from './components/tours/Tours';
import TravelData from './data/db.json';


function App() {
  return (
    <div>
      <Header/>
      <br></br>
      <Tour data = {TravelData}/>
      <br></br>
      <Footer/>
    </div>
    

  );
}

export default App;
