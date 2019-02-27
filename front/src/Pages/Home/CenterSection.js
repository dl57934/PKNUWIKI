import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HorizonTag from "Components/HorizonTag";
import SkyBlueImg from "Components/SkyBlueImg";
import TabBar from "Components/TabBar";
import WebTitle from "Components/WebTitle";

const CenterSection = () => {
  const index = [
    {
      img:
        "https://user-images.githubusercontent.com/23521909/53452757-8f316e00-3a65-11e9-873c-18b72fe38e92.png",
      text: "부경위키에 처음 오셨나요?/글 작성법, 규칙들을 먼 저 읽어봐주세요!!"
    },
    {
      img:
        "https://user-images.githubusercontent.com/23521909/53452935-141c8780-3a66-11e9-8e1b-d537302c7c90.png",
      text: "권리 침해 문의/문의 방법이 권리 침해 도움말에 설명되어있습니다."
    },
    {
      img:
        "https://user-images.githubusercontent.com/23521909/53453001-4fb75180-3a66-11e9-8584-d3acb9f3583d.png",
      text: "운영진 지원/부경대학교 학우들로 이루어진 운영진"
    }
  ];

  return (
    <Container>
      <Title>
        <Name color="rgb(66, 66, 66)">부경위키:</Name>대문
      </Title>
      <HorizonTag color="grey" />
      <MiddleBox id="middle">
        <SkyBlueImg
          width={"250px"}
          height={"60%"}
          isRadius="true"
          img={
            "https://user-images.githubusercontent.com/23521909/53392493-e63f3080-39dc-11e9-8cdb-4a7298701f0c.png"
          }
        />
        <WebTitle />
      </MiddleBox>
      <HorizonTag color="grey" height="1px" />
      <InfoBox>
        {index.map((tabInfo, i) => (
          <TabBar key={i} count={i} img={tabInfo.img} text={tabInfo.text} />
        ))}
      </InfoBox>
    </Container>
  );
};

export default CenterSection;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media all and (max-width: 500px) {
    #description {
      font-size: 20px;
    }
  }
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
