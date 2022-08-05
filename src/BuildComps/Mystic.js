import React from 'react';
import styled from "styled-components";
export const Mystic = ({}) => {
    return (
<MysticJades>
      <MysticCol>
        <Text1>MYSTIC JADES</Text1>
        <FlexRow>
          <FlexColumn1>
            <GENERALINFO
              src={`https://file.rendit.io/n/3uVVMeGHnCU0DfbhbnnC.svg`}
            />
            <Paragraph>
              This comp revolves around the 6 Jade trait and uses Shi Oh Yu,
              Neeko, and Anivia as the AD Carry, the tank, and the AP carry
              respectively. Shi Oh Yu is the main carry of this comp and runs
              strong AD items.{" "}
            </Paragraph>
            <CAROUSELPRIORITY
              src={`https://file.rendit.io/n/HA8KrElvrfkKMJALNWyS.svg`}
            />
            <MysticItems src={`https://file.rendit.io/n/Q9xHwgVT0eeu2ZkcMP7I.png`} />
            <CORECHAMPIONS
              src={`https://file.rendit.io/n/MiiFgFhbJqUtzoWP6rsi.svg`}
            />
            <MysticChamps src={`https://file.rendit.io/n/0ho1GxftUDgwdUUSg4vZ.png`} />
          </FlexColumn1>
          <MysticPos src={`https://file.rendit.io/n/JWbYJwKZbYjsHYJB5aYx.png`} />
        </FlexRow>
      </MysticCol>
    </MysticJades>

    );
};

const MysticJades = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: inherit;
`;
const MysticCol = styled.div`
  background-image: url("https://file.rendit.io/n/iXeCUonVkxkVDwZnIYOC.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 37.26px;
  align-items: flex-start;
  padding: 48px 58.5px 43px 50px;
  font-weight: bold;
`;
const Text1 = styled.div`
  text-align: center;
  width: 413px;
  height: 43px;
  font-size: 36px;
  font-family: Inter;
  color: #ffffff;
  margin: 0px 0px 0px 179px;
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
  justify-content: center;
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
  white-space: pre-wrap;
`;
const CAROUSELPRIORITY = styled.img`
  width: 206.9px;
  height: 14.95px;
  margin: 0px 0px 17.79px 0.35px;
`;
const MysticItems = styled.img`
  width: 267px;
  height: 70px;
  margin: 0px 0px 27.26px 0px;
`;
const CORECHAMPIONS = styled.img`
  width: 184.11px;
  height: 14.95px;
  margin: 0px 0px 17.79px 0.55px;
`;
const MysticChamps = styled.img`
  width: 267px;
  height: 70px;
`;
const MysticPos = styled.img`
  width: 479px;
  height: 346.24px;
  margin: 14.13px 0px 0px 0px;
`;