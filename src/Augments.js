import React from 'react'
import NavBar from './NavBar.js'
import './Augments.css'
import AFK from './assets/Augments/T1/AFK.jpg'
import Assassin from './assets/Augments/T1/Assassin Heart.jpg'
import Astral from './assets/Augments/T1/Astral Heart.jpg'
import Axiom from './assets/Augments/T1/Axiom Arc 1.jpg'
import Band from './assets/Augments/T1/Band of Thieves 1.jpg'
import Best from './assets/Augments/T1/Best Friends 1.jpg'
import Big from './assets/Augments/T1/Big Friend.jpg'
import Bruiser from './assets/Augments/T1/Bruiser Heart.jpg'
import Built from './assets/Augments/T1/Built Different 1.jpg'
import Cannoneer from './assets/Augments/T1/Cannoneer Heart.jpg'
import Cavalier from './assets/Augments/T1/Cavalier Heart.jpg'
import Celestial from './assets/Augments/T1/Celestial Blessing 1.jpg'
import Combat from './assets/Augments/T1/Combat Training 1.jpg'
import CyberneticImp from './assets/Augments/T1/Cybernetic Implants 1.jpg'
import CyberneticSh from './assets/Augments/T1/Cybernetic Shell 1.jpg'
import CyberneticUp from './assets/Augments/T1/Cybernetic Uplink 1.jpg'
import Nidalee from './assets/TierList/Champs/Nidalee.jpg'
import Varus from './assets/TierList/Champs/Varus.jpg'
import Skarner from './assets/TierList/Champs/Skarner.jpg'
import Elise from './assets/TierList/Champs/Elise.jpg'
import Nami from './assets/TierList/Champs/Nami.jpg'
import Kayn from './assets/TierList/Champs/Kayn.jpg'
import Olaf from './assets/TierList/Champs/Olaf.jpg'
import Ryze from './assets/TierList/Champs/Ryze.jpg'
import Ornn from './assets/TierList/Champs/Ornn.jpg'
import ASol from './assets/TierList/Champs/Aurelion Sol.jpg'
import Bard from './assets/TierList/Champs/Bard.jpg'
import Xayah from './assets/TierList/Champs/Xayah.jpg'
import Ezreal from './assets/TierList/Champs/Ezreal.jpg'
import Sett from './assets/TierList/Champs/Sett.jpg'
import Swain from './assets/TierList/Champs/Swain.jpg'
import LeeSin from './assets/TierList/Champs/Lee Sin.jpg'
import Volibear from './assets/TierList/Champs/Volibear.jpg'
import Tristana from './assets/TierList/Champs/Tristana.jpg'
import Aatrox from './assets/TierList/Champs/Aatrox.jpg'
import Hecarim from './assets/TierList/Champs/Hecarim.jpg'
import Pyke from './assets/TierList/Champs/Pyke.jpg'
import Senna from './assets/TierList/Champs/Senna.jpg'
import Braum from './assets/TierList/Champs/Braum.jpg'
import Jinx from './assets/TierList/Champs/Jinx.jpg'
import Idas from './assets/TierList/Champs/Idas.jpg'
import Tahm from './assets/TierList/Champs/Tahm Kench.jpg'
import Yone from './assets/TierList/Champs/Yone.jpg'
import Daeja from './assets/TierList/Champs/Daeja.jpg'
import Neeko from './assets/TierList/Champs/Neeko.jpg'
import Thresh from './assets/TierList/Champs/Thresh.jpg'
import Twitch from './assets/TierList/Champs/Twitch.jpg'
import Zoe from './assets/TierList/Champs/Zoe.jpg'
import Yasuo from './assets/TierList/Champs/Yasuo.jpg'
import Shyv from './assets/TierList/Champs/Shyvana.jpg'
import Soraka from './assets/TierList/Champs/Soraka.jpg'
import Nunu from './assets/TierList/Champs/Nunu.jpg'
import Anivia from './assets/TierList/Champs/Anivia.jpg'





function Augments () {

    return(
        <div className="Augments">
            <NavBar />
       <table>
       <tr>
         <th>Augment</th>
         <th>Tier</th>
         <th>Hextech Bonus</th>
         <th>Best Units</th>
       </tr>
       <tr>
           <td><img src={AFK} width="64" height="64"></img><p>AFK</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>You cannot perform actions for the next 3 rounds. Afterwards, gain 20 gold.</td>
           <td className= "spacing">
            <img src={Nidalee} width="64" height="64"></img>
            <img src={Varus} width="64" height="64"></img> 
            <img src={Skarner} width="64" height="64"></img> 
            <img src={Elise} width="64" height="64"></img> 
            <img src={Nami} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Assassin} width="64" height="64"></img><p>Assassin Heart</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your team counts as having 1 additional Assassin. Gain a Kayn.</td>
           <td className= "spacing">
            <img src={Kayn} width="64" height="64"></img>
            <img src={Aatrox} width="64" height="64"></img> 
            <img src={Olaf} width="64" height="64"></img> 
            <img src={Ryze} width="64" height="64"></img> 
            <img src={Ornn} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Astral} width="64" height="64"></img><p>Astral Heart</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your team counts as having 1 additional Astral. Gain a Nami.</td>
           <td className= "spacing">
            <img src={ASol} width="64" height="64"></img>
            <img src={Skarner} width="64" height="64"></img> 
            <img src={Varus} width="64" height="64"></img> 
            <img src={Xayah} width="64" height="64"></img> 
            <img src={Ezreal} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Axiom} width="64" height="64"></img><p>Axiom Arc 1</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>When your units kill an enemy they gain 20 Mana.</td>
           <td className= "spacing">
            <img src={ASol} width="64" height="64"></img>
            <img src={Sett} width="64" height="64"></img> 
            <img src={Swain} width="64" height="64"></img> 
            <img src={LeeSin} width="64" height="64"></img> 
            <img src={Volibear} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Band} width="64" height="64"></img><p>Band of Thieves</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/A.svg?2" ></img></td>
           <td>Gain 1 Thief's Gloves.</td>
           <td className= "spacing">
            <img src={Nidalee} width="64" height="64"></img>
            <img src={Skarner} width="64" height="64"></img> 
            <img src={Varus} width="64" height="64"></img> 
            <img src={Ryze} width="64" height="64"></img> 
            <img src={Swain} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Best} width="64" height="64"></img><p>Best Friends 1</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your units that start combat only adjacent to each other gain 10% Attack Speed and 15 Armor.</td>
           <td className= "spacing">
            <img src={Skarner} width="64" height="64"></img>
            <img src={Varus} width="64" height="64"></img> 
            <img src={Nidalee} width="64" height="64"></img> 
            <img src={Ezreal} width="64" height="64"></img> 
            <img src={Tristana} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Big} width="64" height="64"></img><p>Big Friend</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your units that start combat next to a unit with over 2000 Health take <br></br>10% less damage for the rest of combat.</td>
           <td className= "spacing">
            <img src={Elise} width="64" height="64"></img>
            <img src={Skarner} width="64" height="64"></img> 
            <img src={Nidalee} width="64" height="64"></img> 
            <img src={Ezreal} width="64" height="64"></img> 
            <img src={Neeko} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Bruiser} width="64" height="64"></img><p>Bruiser Heart</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your team counts as having 1 additional Bruiser. Gain a Braum.</td>
           <td className= "spacing">
            <img src={Ezreal} width="64" height="64"></img>
            <img src={Aatrox} width="64" height="64"></img> 
            <img src={Tahm} width="64" height="64"></img> 
            <img src={Xayah} width="64" height="64"></img> 
            <img src={Soraka} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Built} width="64" height="64"></img><p>Built Different 1</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/S.svg?2" ></img></td>
           <td>Your units with no Traits active gain 250-400 Health and 40-70% <br></br>Attack Speed (based on current Stage).</td>
           <td className= "spacing">
            <img src={Xayah} width="64" height="64"></img>
            <img src={Volibear} width="64" height="64"></img> 
            <img src={Hecarim} width="64" height="64"></img> 
            <img src={Pyke} width="64" height="64"></img> 
            <img src={Ornn} width="64" height="64"></img>
           </td>
       </tr>

       <tr>
           <td><img src={Cannoneer} width="64" height="64"></img><p>Cannoneer Heart</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/S.svg?2" ></img></td>
           <td>Your team counts as having 1 additional Cannoneer. Gain a Tristana</td>
           <td className= "spacing">
            <img src={Senna} width="64" height="64"></img>
            <img src={Idas} width="64" height="64"></img> 
            <img src={Tahm} width="64" height="64"></img> 
            <img src={Braum} width="64" height="64"></img> 
            <img src={Jinx} width="64" height="64"></img>
           </td>
       </tr>
       <tr>
           <td><img src={Cavalier} width="64" height="64"></img><p>Cavalier Heart</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your team counts as having 1 additional Cavalier. Gain a Lillia.</td>
           <td className= "spacing">
            <img src={Volibear} width="64" height="64"></img>
            <img src={Yone} width="64" height="64"></img> 
            <img src={LeeSin} width="64" height="64"></img> 
            <img src={Hecarim} width="64" height="64"></img> 
            <img src={Daeja} width="64" height="64"></img>
           </td>
       </tr>
       <tr>
           <td><img src={Celestial} width="64" height="64"></img><p>Celestial Blessing</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/B.svg?2" ></img></td>
           <td>Your units heal for 12% of the damage dealt by attacks and abilities. <br></br>Excess healing is converted to a shield up to 300 Health.</td>
           <td className= "spacing">
            <img src={Yone} width="64" height="64"></img>
            <img src={Volibear} width="64" height="64"></img> 
            <img src={Daeja} width="64" height="64"></img> 
            <img src={Shyv} width="64" height="64"></img> 
            <img src={Nunu} width="64" height="64"></img>
           </td>
       </tr>
    
       <tr>
           <td><img src={Combat} width="64" height="64"></img><p>Combat Training</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/A.svg?2" ></img></td>
           <td>Your Champions permanently gain 1 Attack Damage every time they kill an enemy unit.<br></br> Champions start with 2 Attack Damage.</td>
           <td className= "spacing">
            <img src={Thresh} width="64" height="64"></img>
            <img src={Idas} width="64" height="64"></img> 
            <img src={Shyv} width="64" height="64"></img> 
            <img src={Ryze} width="64" height="64"></img> 
            <img src={Ornn} width="64" height="64"></img>
           </td>
       </tr>
       <tr>
           <td><img src={CyberneticImp} width="64" height="64"></img><p>Cybernetic Implants</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/A.svg?2" ></img></td>
           <td>Your units equipped with an item gain 150 Health and 8 Attack Damage.</td>
           <td className= "spacing">
            <img src={Aatrox} width="64" height="64"></img>
            <img src={Sett} width="64" height="64"></img> 
            <img src={Olaf} width="64" height="64"></img> 
            <img src={Neeko} width="64" height="64"></img> 
            <img src={Ornn} width="64" height="64"></img>
           </td>
       </tr>
       
       <tr>
           <td><img src={CyberneticSh} width="64" height="64"></img><p>Cybernetic Shell</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/A.svg?2" ></img></td>
           <td>Your champions holding an item gain 150 Health and 20 Armor.</td>
           <td className= "spacing">
            <img src={Thresh} width="64" height="64"></img>
            <img src={Tahm} width="64" height="64"></img> 
            <img src={Olaf} width="64" height="64"></img> 
            <img src={Shyv} width="64" height="64"></img> 
            <img src={Sett} width="64" height="64"></img>
           </td>
       </tr>
       <tr>
           <td><img src={CyberneticUp} width="64" height="64"></img><p>Cybernetic Uplink</p></td>
           <td><img src="https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/S.svg?2" ></img></td>
           <td>Your champions holding an item gain 150 Health and restore 2 Mana per second.</td>
           <td className= "spacing">
            <img src={Anivia} width="64" height="64"></img>
            <img src={Zoe} width="64" height="64"></img> 
            <img src={Ryze} width="64" height="64"></img> 
            <img src={Soraka} width="64" height="64"></img> 
            <img src={Elise} width="64" height="64"></img>
           </td>
       </tr>
   
   </table>
   </div>

    );      
}

    export default Augments;
