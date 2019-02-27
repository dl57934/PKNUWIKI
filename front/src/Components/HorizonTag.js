import React from "react";
import styled from "styled-components";

const HorizonTag = ({ color, height, marginTop, marginBottom }) => {
  return (
    <CustomHR
      color={color}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

export default HorizonTag;

const CustomHR = styled.hr`
  color: ${props => props.color};
  height: ${props => props.height};
  width: 90%;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;
