import './NavBar.css';
import {Link} from "react-router-dom";
import icon from "./assets/icon.png"

function NavBar() {
    return (
      <div className="NavBar">
        <Link to="/account" >
            <div className="Account">
                <img src={icon} className="AccountIcon"></img>
            </div>
        </Link>
        <Link to="/">
            <div className="Button">
                <div className="Text">Home</div>
            </div>
        </Link>
            <div className="Button">
                <div className="Text">Builds</div>
            </div>
        <Link to="/items">
            <div className="Button">
                <div className="Text">Items</div>
            </div>
        </Link>
        <Link to="/augments">
            <div className="Button">
                <div className="Text">Augments</div>
            </div>
        </Link>
        <Link to="/tierlist">
            <div className="Button">
                <div className="Text">Tier List</div>
            </div>
         </Link>
            <div className="Button">
                <div className="Text">Feedback</div>
            </div>
        
      </div>
    );
  }
  
  export default NavBar;