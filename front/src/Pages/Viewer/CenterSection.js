import React, { Fragment, useState } from "react";
import MarkDownRender from "react-markdown-renderer";
import styled from "styled-components";
import BasicButton from "Components/BasicButton";
import HorizonTag from "Components/HorizonTag";
import options from "Components/MarkdownOptions";
import { Link } from "react-router-dom";
import { MainColor } from "Components/CssCollection";

const CenterSection = ({
  data: { title, markdown, makingTime, ver, writer }
}) => {
  return (
    <Fragment>
      <CenterContainer
        title={title}
        markdown={markdown}
        makingTime={makingTime}
        ver={ver}
      />
      <HistoryContainer
        makingTime={makingTime}
        title={title}
        ver={ver}
        writer={writer}
      />
    </Fragment>
  );
};

const CenterContainer = ({ markdown, title, ver }) => (
  <ContentBox>
    <TitleBox>
      <ContentName> {title}</ContentName>
      <EditButton>
        <Link to={`/edit/${title}`}>
          <BasicButton text={"수정하기"} color={MainColor} />
        </Link>
        <CurrentEditText>최근 수정일: {ver}</CurrentEditText>
      </EditButton>
    </TitleBox>
    <Content>
      <MarkDownRender markdown={markdown} options={options} />
    </Content>
  </ContentBox>
);

const FIRST_PAGE = 1;

const HistoryContainer = ({ makingTime, title, ver, writer }) => {
  const LAST_PAGE = Math.ceil(makingTime.length / 5);
  const [nowPage, setNowPage] = useState(1);

  return (
    <HistoryBox>
      <HistoryTitle>수정 내역</HistoryTitle>
      <HorizonTag />
      <ul>
        {makingTime
          .slice(0)
          .reverse()
          .filter(
            (data, index) => index < nowPage * 5 && index >= nowPage * 5 - 5
          )
          .map((data, i) => (
            <HistoryItem key={i}>
              Ver: {getVersion(makingTime.length, nowPage, i)} 수정 날짜:{" "}
              {data + " "}
              작성자: {writer[getVersion(makingTime.length, nowPage, i) - 1]} (
              {data === ver ? (
                "현재"
              ) : (
                <a href={`http://localhost:3000/history/${title}/${data}`}>
                  보기
                </a>
              )}
              )
            </HistoryItem>
          ))}
      </ul>
      <HistoryButtonBox>
        <HistoryButton
          disabled={nowPage === FIRST_PAGE ? true : false}
          onClick={() => setNowPage(nowPage - 1)}
        >
          ◁
        </HistoryButton>
        <HistoryButton
          disabled={nowPage === LAST_PAGE ? true : false}
          onClick={() => setNowPage(nowPage + 1)}
        >
          ▷
        </HistoryButton>
      </HistoryButtonBox>
    </HistoryBox>
  );
};

const getVersion = (verLength, nowPage, i) => {
  return verLength - i - (nowPage - 1) * 5;
};

export default CenterSection;

const ContentName = styled.p`
  margin-left: 5%;
  font-weight: bold;
  font-size: 40px;
`;

const CurrentEditText = styled.p`
  color: rgb(109, 109, 109);
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const Content = styled.div`
  margin-left: 5%;
  margin-right: 10%;
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
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const HistoryButton = styled.button`
  height: 50px;
  width: 40px;
  font-weight: bold;
  color: ${MainColor};
  border-radius: 5%;
  font-size: 30px;
`;

const HistoryButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
