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
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="Button">
                <div className="Text">Home</div>
            </div>
        </Link>
        <Link to="/builds" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="Button">
                <div className="Text">Builds</div>
            </div>
        </Link>
        <Link to="/items" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="Button">
                <div className="Text">Items</div>
            </div>
        </Link>
        <Link to="/augments" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="Button">
                <div className="Text">Augments</div>
            </div>
        </Link>
        <Link to="/tierlist" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="Button">
                <div className="Text">Tier List</div>
            </div>
         </Link>
         <Link to="/feedback" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="Button">
                <div className="Text">Feedback</div>
            </div>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="Button">
                <div className="Text">Login</div>
            </div>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none', color: 'inherit'  }}>
            <div className="Button">
                <div className="Text">Register</div>
            </div>
        </Link>
      </div>
    );
  }
  
  export default NavBar;