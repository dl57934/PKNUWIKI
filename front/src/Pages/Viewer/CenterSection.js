import React, { Fragment, useState } from "react";
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
      <HistoryContainer makingTime={makingTime} />
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

const HistoryContainer = ({ makingTime }) => {
  const page = Math.ceil(makingTime.length / 5);
  console.log(page);
  return (
    <HistoryBox>
      <HistoryTitle>수정 내역</HistoryTitle>
      <HorizonTag />
      <ul>
        {makingTime
          .slice(0)
          .reverse()
          .map((data, i) => (
            <HistoryItem key={i}>
              Ver: {makingTime.length - i} 수정 날짜: {data} 작성자: 철수 (
              {i === 0 ? (
                "현재"
              ) : (
                <a href={`http://localhost:3000/history/${data}`}>보기</a>
              )}
              )
            </HistoryItem>
          ))}
      </ul>
      <HistoryButtonBox>
        <HistoryButton>◁</HistoryButton>
        <HistoryButton>▷</HistoryButton>
      </HistoryButtonBox>
    </HistoryBox>
  );
};

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

const HistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const HistoryTitle = styled.p`
  margin-left: 60px;
  font-weight: bold;
  font-size: 25px;
`;

const HistoryItem = styled.li`
  color: rgb(109, 109, 109);
  margin-left: 60px;
  margin-bottom: 10px;
`;

const HistoryButton = styled.button`
  height: 50px;
  width: 40px;
  font-weight: bold;
  color: skyblue;
  border-radius: 5%;
  font-size: 30px;
`;

const HistoryButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
