import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
    return (
      <div className="NavBar">
        <Link to="/">
            <div className="Home">
                <div className="HomeText">Home</div>
            </div>
        </Link>
            <div className="Builds">
                <div className="BuildsText">Builds</div>
            </div>
            <div className="Items">
                <div className="ItemsText">Items</div>
            </div>
            <div className="Augments">
                <div className="AugmentsText">Augments</div>
            </div>
            <Link to="/tierlist">
            <div className="TierList">
                <div className="TierList">Tier List</div>
            </div>
            </Link>
            <div className="Feedback">
                <div className="FeedbackText">Feedback</div>
            </div>
            <div className="Profile">
                <div className="ProfileIcon"></div>
            </div>
      </div>
    );
  }
  
  export default NavBar;