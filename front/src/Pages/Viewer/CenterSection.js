import React, { Fragment } from "react";
import MarkDownRender from "react-markdown-renderer";
import styled from "styled-components";
import BasicButton from "Components/BasicButton";
import HorizonTag from "Components/HorizonTag";
import options from "Components/MarkdownOptions";
import { Link } from "react-router-dom";

const CenterSection = ({
  data: {
    getContent: { title, markdown }
  }
}) => {
  return (
    <Fragment>
      <EditButton>
        <Link to={`/edit/${title}`}>
          <BasicButton text={"수정하기"} color={"skyblue"} />
        </Link>
      </EditButton>
      <ContentBox>
        <ContentName> {title}</ContentName>
        <Content>
          <MarkDownRender markdown={markdown} options={options} />
        </Content>
      </ContentBox>
      <EditList>
        <EditTitle>수정 내역</EditTitle>
        <HorizonTag />
      </EditList>
    </Fragment>
  );
};

export default CenterSection;

const ContentName = styled.p`
  margin-left: 5%;
  font-weight: bold;
  font-size: 40px;
`;

const Content = styled.div`
  margin-left: 5%;
`;

const ContentBox = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;

const EditButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  margin-right: 50px;
`;

const EditList = styled.div``;

const EditTitle = styled.p`
  margin-left: 30px;
  font-weight: bold;
  font-size: 25px;
`;
