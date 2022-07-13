import React, { useState } from 'react'
import NavBar from './NavBar.js'
import TierBox from './TierBox.js'
import './TierList.css'
import pic1 from './assets/s1.png'
import pic2 from './assets/s2.png'
import pic3 from './assets/s3.png'
import pic4 from './assets/s4.png'
import pic5 from './assets/s5.png'
function TierList() {
   
    const [buttonSelect, setButtonSelect] = useState(0);
    const comps=["Bruiser Swift Shots"]
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