import './Home.css';
import NavBar from './NavBar';
import MainPage from "./assets/MainPage.jpeg"
import pengu1 from './assets/pengu1_frontpage 1.png'
import pengu2 from './assets/pengu2_frontpage 1.png'
import pengu3 from './assets/pengu3_frontpage 1.png'

function Home() {
    return (
    <div>
      <NavBar />
      
      <div className="HomePage">
        <div className="mainImage">
          <h1 className="imageText">The All-In-One Build Guide for Teamfight Tactics</h1>
        </div>
        <div className="BottomHalf">
          <div className="Block">
            <img src={pengu1} className="pengu1"></img>
            <h1 className="BlockHeader">Beginner Friendly</h1>
            <p className="BlockText">TFT Builds focuses on being beginner friendly and easy to understand for even the newest of players.</p>
          </div>
          <div className="Block">
            <img src={pengu2} className="pengu2"></img>
            <h1 className="BlockHeader">Up To Date</h1>
            <p className="BlockText">Data presented is up-to-date with the most recent patch!</p>
          </div>
         <div className="Block">
           <img src={pengu3} className="pengu3"></img>
            <h1 className="BlockHeader">Climb The Ranks</h1>
            <p className="BlockText">Users can feel at ease queuing up for ranked with the help of our build guides.</p>
          </div>
         </div>
         <div className="Disclaimer">Teamfight Builds is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. LoL and Riot Games are trademarks of Riot Games, Inc.</div>
        </div>
    </div>
    );
  }
  
  export default Home;
