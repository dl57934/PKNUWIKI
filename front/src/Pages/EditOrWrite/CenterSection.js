import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Title from "Components/Title";
import BasicButton from "Components/BasicButton";
import MarkDownRender from "react-markdown-renderer";
import options from "Components/MarkdownOptions";

const useTextContents = () => {
  const [value, setValue] = useState("");

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange };
};

const CenterSection = ({ isEdit, title }) => {
  const [writeStatus, setStatus] = useState(true);
  const textarea = useTextContents();
  title = "PKNU WIKI";
  return (
    <Fragment>
      <UpBox>
        <Title text={"PKNU WIKI"} />
        <ButtonBox>
          <BasicButton text={"역사"} />
          <BasicButton
            text={"저장"}
            color={"white"}
            backgroundColor={"rgb(206, 61, 62)"}
          />
        </ButtonBox>
      </UpBox>
      <CenterBox>
        <EditAndPreviewButton
          writeStatus={writeStatus}
          onClick={() => setStatus(true)}
        >
          편집
        </EditAndPreviewButton>
        <EditAndPreviewButton
          writeStatus={!writeStatus}
          onClick={() => setStatus(false)}
        >
          미리보기
        </EditAndPreviewButton>
        {writeStatus ? (
          <WritingZone {...textarea} />
        ) : (
          <PreviewZone>
            <MarkDownRender markdown={textarea.value} options={options} />
          </PreviewZone>
        )}
      </CenterBox>
    </Fragment>
  );
};

export default CenterSection;

const UpBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  margin-right: 20px;
  margin-top: 30px;
`;

const CenterBox = styled.div`
  margin-left: 3%;
  margin-top: 7%;
`;

const WritingZone = styled.textarea`
  width: 97%;
  height: 500px;
  border: 1px solid rgb(221, 221, 221);
  overflow: auto;
`;

const PreviewZone = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 97%;
  height: 500px;
  overflow: auto;
`;

const EditAndPreviewButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  margin-right: 5px;
  border: ${props =>
    props.writeStatus ? "1px solid rgb(221, 221, 221);" : "0px;"};
  border-bottom: 0px;
  background-color: white;
  color: ${props => (props.writeStatus ? "rgb(50, 120, 210)" : "grey")};
  border-radius: 5%;
`;
