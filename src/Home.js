import './Home.css';
import pengu from './assets/pengu.png'
import NavBar from './NavBar';

function Home() {
    return (
      <div>
        <NavBar />
      <div className="Home">
        <div className="HomeText">Teamfight Tactics Guide</div>
        <div className="Images">
        <img src={pengu} className="imageOne"></img>
      <img className="imageTwo"></img>
      </div>
      </div>
      </div>
    );
  }
  
  export default Home;