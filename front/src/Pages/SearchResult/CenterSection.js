import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import Title from "Components/Title";
import HorizonTag from "Components/HorizonTag";

const CenterSection = ({
  data: {
    searchResult: { title, explanation },
    name
  }
}) => {
  console.log(title);
  return (
    <SummaryBox>
      <SuggestNewDocumentBox>
        <SuggestNewDocumentText id="suggestText">
          > 찾는 문서가 없나요? 새로 작성해보세요!!
        </SuggestNewDocumentText>
        <SuggestNewDocumentButton id="suggestButton" href={`/write/${name}`}>
          '{name}' 문서 새로 작성하기
        </SuggestNewDocumentButton>
      </SuggestNewDocumentBox>
      {title[0] === ""
        ? ""
        : title.map((name, i) => (
            <SummaryItems href={`/contents/${name}`} key={i}>
              <Title text={`${i + 1}. ${name}`} />
              <HorizonTag
                color={"lightgrey"}
                marginTop={"-30px"}
                marginBottom={"20px"}
              />
              <Explanation>
                <LinesEllipsis
                  text={explanation[i]}
                  maxLine="3"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </Explanation>
            </SummaryItems>
          ))}
    </SummaryBox>
  );
};

export default CenterSection;

const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
`;

const SummaryItems = styled.a`
  margin-left: 10%;
  margin-top: 20px;
  text-decoration: none;
  color: black;
  width: 80%;
`;

const Explanation = styled.div`
  color: rgb(128, 128, 128);
  margin-left: 5%;
`;

const SuggestNewDocumentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10%;
  margin-top: 3%;
  width: 80%;
  height: 50px;
  border: 1px solid lightgrey;
  font-size: 10px;
  background-color: rgb(220, 236, 246);
  border-radius: 4px;
  @media (max-width: 1390px) {
    #suggestText,
    #suggestButton {
      font-size: 10px;
    }
  }
  @media (max-width: 650px) {
    #suggestButton {
      font-size: 10px;
    }
  }
`;

const SuggestNewDocumentText = styled.p`
  color: rgb(75, 123, 131);
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

const SuggestNewDocumentButton = styled.a`
  width: auto;
  height: auto;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  margin-right: 5px;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  color: black;
`;
