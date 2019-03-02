import React, { Fragment } from "react";
import MarkDownRender from "react-markdown-renderer";
import styled from "styled-components";
import BasicButton from "Components/BasicButton";
import { Link } from "react-router-dom";
import HorizonTag from "Components/HorizonTag";

const CenterSection = ({ markdown }) => {
  console.log(markdown);
  return (
    <Fragment>
      <EditButton>
        <BasicButton text={"수정하기"} color={"skyblue"} />
      </EditButton>
      <Content>
        <MarkDownRender markdown={markdown} />
      </Content>
      <EditList>
        <EditTitle>수정 내역</EditTitle>
        <HorizonTag />
      </EditList>
    </Fragment>
  );
};

export default CenterSection;

const Content = styled.div`
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
