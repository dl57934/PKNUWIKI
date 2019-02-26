import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HorizonTag from "../../../Components/HorizonTag";
import WhaleImg from "../../../Components/WhaleImg";

const CenterSection = () => {
  return (
    <Container>
      <Title>
        <Name color="rgb(66, 66, 66)">부경위키:</Name>대문
      </Title>
      <HorizonTag color="grey" />
      <MiddleBox>
        <WhaleImg width={"40%"} height={"60%"} isRadius="true" />
        <Description>
          부경대학교 학우들이 써내려가는 <br />
          <Name color="skyblue">PKNU WIKI</Name>
        </Description>
      </MiddleBox>
      <HorizonTag color="grey" height="1px" />
    </Container>
  );
};

export default CenterSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  color: ${props => props.color};
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

const Description = styled.h2`
  text-align: center;
  font-size: 40px;
  color: grey;
`;
