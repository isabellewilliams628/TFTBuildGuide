import './TierBox.css';

function TierBox(props){
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
                        {props.list}
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