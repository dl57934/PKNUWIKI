import React, { Fragment } from "react";
import styled from "styled-components";
import HorizonTag from "../HorizonTag";
const TabBar = (img, text) => {
  return (
    <Fragment>
      <TabBox>
        <LeftSection />
        <RightSection />
      </TabBox>
      <HorizonTag color="grey" />
    </Fragment>
  );
};

export default TabBar;

const TabBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 90px;
  width: 90%;
`;

const LeftSection = styled.div`
  background-color: skyblue;
`;

const RightSection = styled.div`
  background-color: black;
`;
