import './Card.css';
import pengu from './assets/pengu.png'

function Card() {
    return (
      <div className="Card">
      <div class="CardText">TEAMFIGHT TACTICS 
      GUIDE</div>
      <img src={pengu} alt="imageOne"></img>
      <img className="imageTwo"></img>
      </div>
    );
  }
  
  export default Card;