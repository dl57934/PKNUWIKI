import React from "react";
import styled from "styled-components";

const Title = ({ text }) => {
  return <TitleDeco>{text}</TitleDeco>;
};

export default Title;

const TitleDeco = styled.p`
  font-weight: bold;
  font-size: 30px;
`;
