import React from "react";
import MarkDownRender from "react-markdown-renderer";
import styled from "styled-components";
const CenterSection = ({ markdown }) => {
  console.log(markdown);
  return (
    <Container>
      <MarkDownRender markdown={markdown} />
    </Container>
  );
};

export default CenterSection;

const Container = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;
