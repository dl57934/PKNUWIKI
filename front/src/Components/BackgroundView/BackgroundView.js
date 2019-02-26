import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BackgroundView = ({ LeftView, RightView }) => {
  return (
    <Container id="Box">
      <LeftBox id="leftBox" />
      <CenterBox>
        <LeftView />
      </CenterBox>
      <RightBox id="rightBox">
        <CurrentlyChange>
          <RightView />
        </CurrentlyChange>
      </RightBox>
    </Container>
  );
};

export default BackgroundView;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr;
  height: 800px;
  @media (max-width: 700px) {
    #Box {
      background-color: white;
      display: flex;
    }
    #leftBox {
      width: 0;
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
  margin-right: 10px;
`;
