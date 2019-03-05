import React from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import Title from "Components/Title";
import HorizonTag from "Components/HorizonTag";

const CenterSection = ({
  data: {
    searchResult: { title, explanation }
  }
}) => {
  title.push("react-native");
  explanation.push(
    "react와 비슷하게 react-native에 적용할 수 있는 앱개발 프레임워크"
  );
  return (
    <SummaryBox>
      {title.map((name, i) => (
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
`;

const SummaryItems = styled.a`
  margin-left: 10%;
  margin-top: 50px;
  text-decoration: none;
  color: black;
  width: 80%;
`;

const Explanation = styled.div`
  color: rgb(128, 128, 128);
  margin-left: 5%;
`;
