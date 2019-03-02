import React from "react";
import styled from "styled-components";

const BasicButton = ({ text, backgroundColor, color }) => {
  return (
    <Button backgroundColor={backgroundColor} color={color}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  border: 1px solid grey;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  width: 80px;
  height: 50px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 15px;
`;

export default BasicButton;
