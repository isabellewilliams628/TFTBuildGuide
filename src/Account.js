import React from 'react'
import NavBar from './NavBar';
import './Account.css'
import profile from './assets/profile.png'

function Account() {
    return (
      <div className="Account">
        <NavBar />
        <div className="AccoungPage">
        <div className="TopHalf">
          <div className="LeftHalf">
          <div className="ProfilePicture">
            <img src={profile} className="ProfilePic"></img>
          </div>
          </div>
          <div className="RightHalf">
          <div className="Username">Welcome username!</div>
          </div>
        </div>
        <div className="BottomHalf">
          <div className="FavBuildsBar">
            <div className="FavBuildsBarText">FAVORITE BUILDS: </div>
          </div>
          <div className="FavBuilds"></div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Account;