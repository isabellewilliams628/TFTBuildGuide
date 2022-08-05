import React from "react";
import styled from "styled-components";
export const Shimmer = ({}) => {
  return (
    <ShimmerSquad>
      <FlexColumn>
        <Text1>SHIMMER SQUAD</Text1>
        <FlexRow>
          <FlexColumn1>
            <GENERALINFO
              src={`https://file.rendit.io/n/gId5gXR7zJ3XkEw5jGg1.svg`}
            />
            <Paragraph>
              Looks to use Shimmerscale trait to gain additional items and flex
              with both shimmer and non-shimmerscale carries.
            </Paragraph>
            <CAROUSELPRIORITY
              src={`https://file.rendit.io/n/X0599jg3VQK48LGdrNbo.svg`}
            />
            <Image1 src={`https://file.rendit.io/n/vPsuwwT3Jm4luw9h7RPx.png`} />
            <CORECHAMPIONS
              src={`https://file.rendit.io/n/tgOF9b9hFPR4ki9Y29Pj.svg`}
            />
            <Image2 src={`https://file.rendit.io/n/A0WVFLnP3lIQCrvfrNbH.png`} />
          </FlexColumn1>
          <Image3 src={`https://file.rendit.io/n/m53DEKn1XiBD591iv0Vf.png`} />
        </FlexRow>
      </FlexColumn>
    </ShimmerSquad>
  );
};
const ShimmerSquad = styled.div`
  width: 940px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: 20px;
  margin-right: 20px;
`;
const FlexColumn = styled.div`
  background-image: url("https://file.rendit.io/n/9bzvnf6kw08eEtST0Hma.png");
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
