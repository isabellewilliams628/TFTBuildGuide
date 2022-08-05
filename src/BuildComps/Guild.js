import React from 'react';
import styled from "styled-components";

export function Guild({ }) {
    return (
        <GuildBuddies>
            <FlexColumn>
                <Text1>TRAINING BUDDIES</Text1>
                <FlexRow>
                    <FlexColumn1>
                        <GENERALINFO
                            src={`https://file.rendit.io/n/rStMUdeLNQYcMNAa8YLP.svg`} />
                        <Paragraph>
                            Nomsy and Sejuani tank, backrow outputs tons of damage. Twitch and
                            Ryze shine early game. Rush for 3 Trainer for early Nomsy upgrade.
                            Only get Bard when you're satisfied with lower rarity unit
                            upgrades - he can lock you out of rolling them.
                        </Paragraph>
                        <CAROUSELPRIORITY
                            src={`https://file.rendit.io/n/Ks0UydMFTmct5aTxE7Te.svg`} />
                        <Image1 src={`https://file.rendit.io/n/bcPxVwn0nuPJWg5e4fPp.png`} />
                        <CORECHAMPIONS
                            src={`https://file.rendit.io/n/oqStKLmcQAAbbWQoGrWO.svg`} />
                        <Image2 src={`https://file.rendit.io/n/E0c3wz3PDke6KM3HeIGF.png`} />
                    </FlexColumn1>
                    <Image3 src={`https://file.rendit.io/n/33JST1JMYXHvtSqHgqCs.png`} />
                </FlexRow>
            </FlexColumn>
        </GuildBuddies>
       );
      }

const GuildBuddies = styled.div`
width: 940px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`;
const FlexColumn = styled.div`
background-image: url("https://file.rendit.io/n/4i0RYHglacrJnyyN93te.png");
background-size: cover;
display: flex;
flex-direction: column;
gap: 36.38px;
align-items: flex-start;
padding: 48px 60.5px 43px 48px;
`;
const Text1 = styled.div`
text-align: center;
width: 413px;
height: 43px;
font-size: 36px;
font-family: Inter;
color: #ffffff;
margin: 0px 0px 0px 179px;
font-weight: bold;
`;
const FlexRow = styled.div`
align-self: stretch;
display: flex;
flex-direction: row;
gap: 60.5px;
justify-content: center;
align-items: flex-start;
`;
const FlexColumn1 = styled.div`
align-self: stretch;
width: 292px;
display: flex;
flex-direction: column;
justify-content: flex-end;
flex-grow: 1;
align-items: flex-start;
`;
const GENERALINFO = styled.img`
width: 144.11px;
height: 14.94px;
margin: 0px 0px 17.8px 0.44px;
`;
const Paragraph = styled.div`
width: 292px;
height: 76px;
font-size: 14px;
font-family: Inter;
font-weight: 500;
align-self: center;
margin: 0px 0px 37.26px 0px;
`;
const CAROUSELPRIORITY = styled.img`
width: 206.9px;
height: 14.95px;
margin: 0px 0px 17.79px 0.35px;
`;
const Image1 = styled.img`
width: 267px;
height: 70px;
margin: 0px 0px 27.26px 0px;
`;
const CORECHAMPIONS = styled.img`
width: 184.11px;
height: 14.95px;
margin: 0px 0px 17.79px 0.55px;
`;
const Image2 = styled.img`
width: 268px;
height: 70px;
`;
const Image3 = styled.img`
width: 479px;
height: 346.24px;
`;
