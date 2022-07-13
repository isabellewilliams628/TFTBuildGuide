import React, { useState } from 'react'
import NavBar from './NavBar.js'
import TierBox from './TierBox.js'
import './TierList.css'

function TierList() {
   
    const [buttonSelect, setButtonSelect] = useState(0);
    const comps=["sc1", "sc2", "sc3", "sc4", "sc5", "sc6"]
    const champs=["Karma"]
    const items=["Recurve Bow"]
    const augments=["Revel Crown"]
    
    return(
        <div className="TierList">
            <NavBar />
            <div className="TopBar">
                <div onClick={() => {setButtonSelect(0)}} className="TypeButton">
                    <div className="ButtonText">COMPS</div>
                </div>
                <div onClick={() => {setButtonSelect(1)}} className="TypeButton">
                    <div className="ButtonText">CHAMPS</div>
                </div>
                <div onClick={() => {setButtonSelect(2)}} className="TypeButton"> 
                    <div className="ButtonText">ITEMS</div>
                </div>
                <div onClick={() => {setButtonSelect(3)}} className="TypeButton"> 
                    <div className="ButtonText">AUGMENTS</div>
                </div>
            </div>
            { buttonSelect == 0 ? <TierBox list={comps}/> :  buttonSelect == 1 ? <TierBox list={champs}/> :  buttonSelect == 2 ? <TierBox list={items}/>  : <TierBox list={augments}/> };
            
        </div>
    );

}

export default TierList