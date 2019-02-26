import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BackgroundView = ({ CenterSection }) => {
  return (
    <Container id="mainBox">
      <LeftBox id="leftBox" />
      <CenterBox id="centerBox">
        <CenterSection />
      </CenterBox>
      <RightBox id="rightBox">
        <CurrentlyChange />
      </RightBox>
    </Container>
  );
};

export default BackgroundView;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr;
  height: 1000px;
  @media all and (max-width: 700px) {
    display: flex;

    #leftBox {
      width: 0;
    }
    #centerBox {
      width: 100%;
      background-color: white;
    }
    #rightBox {
      width: 0;
      background-color: white;
    }
  }
`;

const LeftBox = styled.div``;
const CenterBox = styled.div`
  background-color: white;
`;
const RightBox = styled.div``;

const CurrentlyChange = styled.div`
  background-color: white;
  width: 270px;
  height: 580px;
  margin-left: 20%;
  margin-top: 10%;
`;
