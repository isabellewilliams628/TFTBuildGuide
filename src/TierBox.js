import React, {useState} from 'react';
import './TierBox.css';

import pic1 from './assets/s1.png'
import pic2 from './assets/s2.png'
import pic3 from './assets/s3.png'
import pic4 from './assets/s4.png'
import pic5 from './assets/s5.png'



function TierBox(props){

    let champs = [[pic1, pic2, pic3, pic4, pic5][pic3]]

    return(
            <div className="TierBox">
                <div className="TierLevels">
                    <div className="Level">S</div>
                    <div className="Level">A</div>
                    <div className="Level">B</div>
                    <div className="Level">C</div>
                     <div className="Level">D</div>
                </div>
                <div className="Ranks">
                    <div className="RankList">
                        {
                            props.list.map((pic, index) => {
                                return <img key={pic} src={champs[index]}/>
                            })
                        }
                    </div>
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                    <div className="RankList"></div>
                </div>
            </div> 
    );
}

export default TierBox;