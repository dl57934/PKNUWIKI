import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import HorizonTag from "./HorizonTag";
import SkyBlueImg from "./SkyBlueImg";
import { MainColor } from "./CssCollection";

const LAST_TAB_BAR = 2;

const TabBar = ({ img, text, count }) => {
  const [title, description] = text.split("/");
  return (
    <Fragment>
      <TabBox>
        <LeftSection>
          <SkyBlueImg img={img} width="65px" height="65px" />
        </LeftSection>
        <RightSection index={count}>
          <Title id="title">{title}</Title>
          <Description id="addition">{description}</Description>
        </RightSection>
      </TabBox>
      {count !== LAST_TAB_BAR ? (
        <HorizonTag color="grey" marginBottom="1px" marginTop="1px" />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default TabBar;

const CommonTextStyle = css`
  margin-bottom: 2px;
  margin-left: 10px;
`;

const Title = styled.p`
  ${CommonTextStyle}
  margin-top:10px;
  font-weight: bold;
  font-size: 22px;
`;
const Description = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: gray;
  ${CommonTextStyle};
`;

const TabBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 80px;
  width: 90%;
  @media all and (max-width: 500px) {
    transition-duration: 0.5s;
    #title {
      margin-top: 10px;
      font-weight: bold;
      font-size: 20px;
    }
    #addition {
      font-size: 12px;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${MainColor};
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  ${props =>
    props.index === 0
      ? `border-top:2px solid ${MainColor}`
      : props.index === 2
      ? `border-bottom:2px solid ${MainColor}`
      : 0};
  border-right: 2px solid ${MainColor};
`;
