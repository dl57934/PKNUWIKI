import React, { Fragment } from "react";
import MarkDownRender from "react-markdown-renderer";
import styled from "styled-components";
import BasicButton from "Components/BasicButton";
import HorizonTag from "Components/HorizonTag";
import options from "Components/MarkdownOptions";
import { Link } from "react-router-dom";

const CenterSection = ({
  data: {
    getContent: { title, markdown, historyLength, makingTime }
  },
  data
}) => {
  console.log(data);
  return (
    <Fragment>
      <CenterContainer
        title={title}
        markdown={markdown}
        makingTime={makingTime}
      />
      <EditContainer makingTime={makingTime} />
    </Fragment>
  );
};

const CenterContainer = ({ markdown, title, makingTime }) => (
  <ContentBox>
    <TitleBox>
      <ContentName> {title}</ContentName>
      <EditButton>
        <Link to={`/edit/${title}`}>
          <BasicButton text={"수정하기"} color={"skyblue"} />
        </Link>
        <CurrentEditText>
          최근 수정일: {makingTime[makingTime.length - 1]}
        </CurrentEditText>
      </EditButton>
    </TitleBox>
    <Content>
      <MarkDownRender markdown={markdown} options={options} />
    </Content>
  </ContentBox>
);

const EditContainer = ({ makingTime }) => (
  <EditBox>
    <EditTitle>수정 내역</EditTitle>
    <HorizonTag />
    <ul>
      {makingTime
        .slice(0)
        .reverse()
        .map((data, i) => (
          <EditItem>
            Ver: {makingTime.length - i} 수정 날짜: {data} (보기)
          </EditItem>
        ))}
    </ul>
  </EditBox>
);

export default CenterSection;

const ContentName = styled.p`
  margin-left: 5%;
  font-weight: bold;
  font-size: 40px;
`;

const CurrentEditText = styled.p`
  color: rgb(109, 109, 109);
`;

const Content = styled.div`
  margin-left: 5%;
`;

const ContentBox = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EditButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 40px;
  margin-right: 50px;
`;

const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const EditTitle = styled.p`
  margin-left: 60px;
  font-weight: bold;
  font-size: 25px;
`;

const EditItem = styled.li`
  color: rgb(109, 109, 109);
  margin-left: 60px;
  margin-bottom: 10px;
`;
