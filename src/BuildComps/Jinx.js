import React from "react";
import styled from "styled-components";
export const Jinx = ({}) => {
  return (
    <JinxGoBRR>
      <FlexColumn>
        <Text1>JINX GO BRR</Text1>
        <FlexRow>
          <FlexColumn1>
            <GENERALINFO
              src={`https://file.rendit.io/n/sIOdhv8asho9wrE4gakm.svg`}
            />
            <Paragraph>
              Vertical build with Cannoneer prio. Can swap Lulu for Sona late
              game for enhanced evoker bonus.
            </Paragraph>
            <CAROUSELPRIORITY
              src={`https://file.rendit.io/n/Wb6TONwHGU0jhxp7pZyH.svg`}
            />
            <Image1 src={`https://file.rendit.io/n/0kXmZtW2ONnHRWyN99Qr.png`} />
            <CORECHAMPIONS
              src={`https://file.rendit.io/n/8oP5qmwZhHg3yfwj7tHl.svg`}
            />
            <Image2 src={`https://file.rendit.io/n/LN9eBoxdcrZT9rukaBrc.png`} />
          </FlexColumn1>
          <Image3 src={`https://file.rendit.io/n/ZaiUrQZ0EdzInW54ttFt.png`} />
        </FlexRow>
      </FlexColumn>
    </JinxGoBRR>
  );
};
const JinxGoBRR = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexColumn = styled.div`
  background-image: url("https://file.rendit.io/n/GOBncQw4uLGyTts1C2Dq.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 36.38px;
  align-items: flex-start;
  padding: 48px 60.5px 43px 47px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 413px;
  height: 43px;
  font-size: 36px;
  font-family: Inter;
  color: #ffffff;
  margin: 0px 0px 0px 180px;
  font-weight: bold;
`;
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 61.5px;
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
  margin: 0px 0px 14.8px 1.44px;
`;
const Paragraph = styled.div`
  width: 292px;
  height: 82px;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  align-self: center;
  margin: 0px 0px 34.26px 0px;
`;
const CAROUSELPRIORITY = styled.img`
  width: 206.9px;
  height: 14.95px;
  margin: 0px 0px 17.79px 1.35px;
`;
const Image1 = styled.img`
  width: 267px;
  height: 70px;
  margin: 0px 0px 27.26px 1px;
`;
const CORECHAMPIONS = styled.img`
  width: 184.11px;
  height: 14.95px;
  margin: 0px 0px 17.79px 1.55px;
`;
const Image2 = styled.img`
  width: 268px;
  height: 70px;
  margin: 0px 0px 0px 1px;
`;
const Image3 = styled.img`
  width: 479px;
  height: 346.24px;
`;