import React, { useState } from 'react'
import NavBar from './NavBar.js'
import TierBox from './TierBox.js'
import TierImages from './TierImages.js'
import './TierList.css'

function TierList(){
    const [buttonSelect, setButtonSelect] = useState(0);
    const comps=[["sc1", "sc2", "sc3", "sc4", "sc5", "sc6"]["sc3"]]
    const champs=[]
    const items=[]
    const augments=[]

    return(
        <div className="TierList">
            <NavBar />
            <div className="TopBar">
                <div onClick={() => {setButtonSelect(0)}} className={buttonSelect == 0 ? "SelectedButton" : "TypeButton"}>
                    <div className="ButtonText">COMPS</div>
                </div>
                <div onClick={() => {setButtonSelect(1)}} className={buttonSelect == 1 ? "SelectedButton" : "TypeButton"}>
                    <div className="ButtonText">CHAMPS</div>
                </div>
                <div onClick={() => {setButtonSelect(2)}} className={buttonSelect == 2 ? "SelectedButton" : "TypeButton"}> 
                    <div className="ButtonText">ITEMS</div>
                </div>
                <div onClick={() => {setButtonSelect(3)}} className={buttonSelect == 3 ? "SelectedButton" : "TypeButton"}> 
                    <div className="ButtonText">AUGMENTS</div>
                </div>
            </div>

            { buttonSelect == 0 ? <TierBox list={comps}/> :  buttonSelect == 1 ? <TierBox list={champs}/> :  buttonSelect == 2 ? <TierBox list={items}/>  : <TierBox list={augments}/> };
            
        </div>
    );
 }

 export default TierList;
