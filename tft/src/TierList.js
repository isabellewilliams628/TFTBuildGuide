import React from 'react'
import NavBar from './NavBar.js'
import './TierList.css'

function TierList() {

    return(
        <div className="TierList">
            <NavBar />
            <div className="TopBar">
                <div className="TypeButton">
                    <div className="ButtonText">COMPS</div>
                </div>
                <div className="TypeButton">
                    <div className="ButtonText">CHAMPS</div>
                </div>
                <div className="TypeButton"> 
                    <div className="ButtonText">ITEMS</div>
                </div>
                <div className="TypeButton"> 
                    <div className="ButtonText">AUGMENTS</div>
                </div>
            </div>
            <div className="TierBox">
                <div className="TierLevels">
                    <div className="Level">S</div>
                    <div className="Level">A</div>
                    <div className="Level">B</div>
                    <div className="Level">C</div>
                    <div className="Level">D</div>
                </div>
                <div className="Ranks">
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                </div>
            </div>
        </div>
    )

}

export default TierList