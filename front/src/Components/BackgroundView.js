import React from "react";
import styled from "styled-components";

const BackgroundView = ({ CenterSection, markdown, isEdit, searchName }) => {
  return (
    <Container id="mainBox">
      <LeftBox id="leftBox" />
      <CenterBox id="centerBox">
        <CenterSection
          markdown={markdown}
          isEdit={isEdit}
          contentsName={searchName}
        />
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
  height: 1500px;
  @media all and (max-width: 1000px) {
    display: flex;
    transition-duration: 1s;
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
  margin-left: 12%;
  margin-top: 10%;
`;
