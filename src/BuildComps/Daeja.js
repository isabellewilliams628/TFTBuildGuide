import React from "react";
import styled from "styled-components";
export const Daeja = ({}) => {
  return (
    <DaejaCarry>
      <FlexColumn>
        <Text1>DAEJA CARRY</Text1>
        <FlexRow>
          <FlexColumn1>
            <Image1 src={`https://file.rendit.io/n/zI2fgcOmiHhEVr0Jsj71.svg`} />
            <Paragraph>
              Vertical build with Mirage champions being the main priority.
              Itemize Daeja and eventually Yasuo.
            </Paragraph>
            <CAROUSELPRIORITY
              src={`https://file.rendit.io/n/y3K6OREoOWb9yJ1HvNb2.svg`}
            />
            <Image2 src={`https://file.rendit.io/n/r5dXfhZrYb8fJzN7it7f.png`} />
            <CORECHAMPIONS
              src={`https://file.rendit.io/n/RuZ13qeXyhyz89gi2UZU.svg`}
            />
            <Image3 src={`https://file.rendit.io/n/nmZBdeTgGugvzjB0thEC.png`} />
          </FlexColumn1>
          <Image4 src={`https://file.rendit.io/n/u20SOAaCTtKno49T3MVG.png`} />
        </FlexRow>
      </FlexColumn>
    </DaejaCarry>
  );
};
const DaejaCarry = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  background-image: url("https://file.rendit.io/n/NCyJSTPock2xnmpVKtzY.png");
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
  font-size: 32px;
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
const Image1 = styled.img`
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
const Image2 = styled.img`
  width: 267px;
  height: 70px;
  margin: 0px 0px 27.26px 0px;
`;
const CORECHAMPIONS = styled.img`
  width: 184.11px;
  height: 14.95px;
  margin: 0px 0px 17.79px 0.55px;
`;
const Image3 = styled.img`
  width: 268px;
  height: 70px;
`;
const Image4 = styled.img`
  width: 479px;
  height: 346.24px;
`;
