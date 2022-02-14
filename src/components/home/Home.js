import Header from "../header/Header";
import Tour from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props){
    return(
        <>
        <Header/>
        <Tour data = {props.data}/>
        <Footer/>
        </>
    )
}
export default Home;