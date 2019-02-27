import React from "react";
import styled from "styled-components";

const SkyBlueImg = ({ width, height, isRadius, img }) => {
  return <Whale width={width} height={height} radius={isRadius} src={img} />;
};

const Whale = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => (props.radius ? "50%;" : "0")};
  background-color: skyblue;
`;

export default SkyBlueImg;
