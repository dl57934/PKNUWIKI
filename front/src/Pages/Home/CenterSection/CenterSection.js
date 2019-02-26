import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HorizonTag from "../../../Components/HorizonTag";

const CenterSection = () => {
  return (
    <Container>
      <Title>
        <Name>부경위키:</Name>대문
      </Title>
      <HorizonTag color="grey" height="1px" />
      <MiddleBox />
    </Container>
  );
};

export default CenterSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justi
`;

const Title = styled.a.attrs({
  href: "/부경위키:대문"
})`
  text-decoration: none;
  margin-left: 5%;
  margin-top: 60px;
  margin-bottom: 20px;
  width: 200px;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

const Name = styled.span`
  color: rgb(66, 66, 66);
`;

const MiddleBox = styled.div`
  display: flex;
  align
`;
