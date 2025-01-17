import React, { useState, Fragment, useEffect } from "react";
import styled from "styled-components";
import Title from "Components/Title";
import MarkDownRender from "react-markdown-renderer";
import options from "Components/MarkdownOptions";
import useInputTag from "Hooks/inputTag";
import { useMutation } from "react-apollo-hooks";
import { BasicButtonCss } from "Components/CssCollection";
import { EDIT_WRITE_PAGE } from "./query";

const CenterSection = ({ contentName, isEdit, data }) => {
  const [writeStatus, setStatus] = useState(true);
  const textarea = useInputTag("");
  const hashTagState = useInputTag("");
  const summaryState = useInputTag("");

  if (isEdit) {
    console.log(data);
    const {
      getContent: { markdown, hashTag, summary }
    } = data;

    useEffect(() => {
      textarea.setValue(markdown);
      hashTagState.setValue(hashTag.join(" "));
      summaryState.setValue(summary);
    }, [data]);
  }

  const saveContent = useMutation(EDIT_WRITE_PAGE, {
    update: (proxy, mutationResult) => {
      const {
        data: { saveContent }
      } = mutationResult;
      if (saveContent)
        window.location.href = `http://localhost:3000/contents/${contentName}`;
    },
    variables: {
      contentName,
      markdown: textarea.value,
      hashTag: hashTagState.value.split(" "),
      summary: summaryState.value,
      writer: localStorage.getItem("email")
    }
  });

  return (
    <Fragment>
      <UpBox>
        <Title text={contentName} />
        <ButtonBox>
          <SaveButton onClick={saveContent}>저장</SaveButton>
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
      <Title text={"요약"} />
      <BottomBox>
        <HashTagInput {...summaryState} />
      </BottomBox>
      <HashTagTitle>해쉬 태그 설정</HashTagTitle>
      <BottomBox>
        <HashTagInput {...hashTagState} />
      </BottomBox>
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

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HashTagInput = styled.input`
  width: 80%;
  height: 25px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(109, 109, 109);
`;

const SaveButton = styled.button`
  background-color: rgb(206, 61, 62);
  color: white;
  ${BasicButtonCss}
`;

const HashTagTitle = styled.h4`
  color: rgb(109, 109, 109);
  margin-left: 5%;
  margin-top: 5%;
`;
