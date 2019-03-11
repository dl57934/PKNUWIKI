import React, { Fragment } from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import gql from "graphql-tag";
import HorizonTag from "./HorizonTag";

const CURRENTLY_CHANGE_DOCUMENT = gql`
  query getCurrentlyChangeDocument {
    getCurrentlyChangeDocument {
      title
      makingTime
    }
  }
`;

const BackgroundView = ({ CenterSection, isEdit, contentName, data }) => {
  const documentList = useQuery(CURRENTLY_CHANGE_DOCUMENT, {
    pollInterval: 20000
  });

  const {
    loading,
    data: { getCurrentlyChangeDocument }
  } = documentList;

  if (loading) return "loading";
  else {
    return (
      <Container id="mainBox">
        <LeftBox id="leftBox" />
        <CenterBox id="centerBox">
          <CenterSection
            isEdit={isEdit}
            contentName={contentName}
            data={data}
          />
        </CenterBox>
        <RightBox id="rightBox">
          <CurrentlyChange>
            <CurrentlyChangeTitle>최근 수정된 글 목록</CurrentlyChangeTitle>
            <hr />
            {getCurrentlyChangeDocument.map((item, i) => (
              <Fragment key={i}>
                <CurrentlyChangeItem
                  href={`http://localhost:3000/contents/${item.title}`}
                >
                  <h3>{item.title}</h3>{" "}
                  <h3>{item.makingTime.split(" ")[1]} </h3>
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
  }
};

export default BackgroundView;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr;
  height: auto !important;
  @media all and (max-width: 1300px) {
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
      margin-right: 0;
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
const RightBox = styled.div`
  margin-right: 50px;
`;

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
