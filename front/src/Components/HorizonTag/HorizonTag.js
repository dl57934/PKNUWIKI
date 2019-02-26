import React from "react";
import styled from "styled-components";

const HorizonTag = ({ color, height }) => {
  return <CustomHR color={color} height={height} />;
};

export default HorizonTag;

const CustomHR = styled.hr`
  color: ${props => props.color};
  height: ${props => props.height};
  width: 90%;
`;
