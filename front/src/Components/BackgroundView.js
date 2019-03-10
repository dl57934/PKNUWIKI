import React, { useQuery, Fragment } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import HorizonTag from "./HorizonTag";

const CURRENTLY_CHANGE_DOCUMENT = gql`
  query getCurrentlyChangeDocument {
    getCurrentlyChangeDocument
  }
`;

const changeDocumentList = [
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" },
  { title: "hi", makingTime: "19:20" }
];

const BackgroundView = ({ CenterSection, isEdit, contentName, data }) => {
  return (
    <Container id="mainBox">
      <LeftBox id="leftBox" />
      <CenterBox id="centerBox">
        <CenterSection isEdit={isEdit} contentName={contentName} data={data} />
      </CenterBox>
      <RightBox id="rightBox">
        <CurrentlyChange>
          <CurrentlyChangeTitle>최근 수정된 글 목록</CurrentlyChangeTitle>
          <hr />
          {changeDocumentList.map(item => (
            <Fragment>
              <CurrentlyChangeItem
                href={`http://localhost:3000/contents/${item.title}`}
              >
                <h3>{item.title}</h3> <h3>{item.makingTime} </h3>
              </CurrentlyChangeItem>
              <HorizonTag marginBottom="0" marginTop="0" />
            </Fragment>
          ))}
        </CurrentlyChange>
      </RightBox>
      <div />
      <Box />
      <div />
    </Container>
  );
};

export default BackgroundView;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr;
  height: auto !important;
  @media all and (max-width: 1000px) {
    display: flex;
    transition-duration: 1s;
    #leftBox {
      width: 0;
    }
    #centerBox {
      width: 100%;
      background-color: white;
    }
    #rightBox {
      width: 0;
      background-color: white;
    }
  }
`;

const Box = styled.div`
  height: 100px;
  background-color: white;
`;

const LeftBox = styled.div``;
const CenterBox = styled.div`
  background-color: white;
`;
const RightBox = styled.div``;

const CurrentlyChange = styled.div`
  background-color: white;
  width: 270px;
  height: auto;
  margin-left: 12%;
  margin-top: 10%;
`;

const CurrentlyChangeItem = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 4%;
  font-size: 12px;
  text-decoration: none;
  color: rgb(109, 109, 109);
`;

const CurrentlyChangeTitle = styled.h4`
  padding-top: 8%;
  margin-left: 3%;
`;
