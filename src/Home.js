import './Home.css';
import NavBar from './NavBar';
import MainPage from './assets/MainPage.jpeg'

function Home() {
    return (
      <div>
      <NavBar />
      
    <div className="MainPage">
      <img src={MainPage} className="MainPage"></img>
    </div>
    </div>
    );
  }
  
  export default Home;
