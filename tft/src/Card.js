import './Card.css';
import pengu from './assets/pengu.png'
import NavBar from './NavBar';

function Card() {
    return (
      <div>
        <NavBar />
      <div className="Card">
        <div className="CardText">TEAMFIGHT TACTICS GUIDE</div>
        <div className="Images">
        <img src={pengu} className="imageOne"></img>
      <img className="imageTwo"></img>
      </div>
      </div>
      </div>
    );
  }
  
  export default Card;