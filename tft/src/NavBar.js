import './NavBar.css';

function NavBar() {
    return (
      <div className="NavBar">
            <div className="Home">
                <div className="HomeText">Home</div>
            </div>
            <div className="Builds">
                <div className="BuildsText">Builds</div>
            </div>
            <div className="Items">
                <div className="ItemsText">Items</div>
            </div>
            <div className="Augments">
                <div className="AugmentsText">Augments</div>
            </div>
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