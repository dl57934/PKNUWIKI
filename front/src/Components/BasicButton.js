import React from "react";
import styled from "styled-components";
import { BasicButtonCss } from "Components/CssCollection";

const BasicButton = ({ text, backgroundColor, color }) => {
  return (
    <Button backgroundColor={backgroundColor} color={color}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  ${BasicButtonCss}
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

export default BasicButton;
