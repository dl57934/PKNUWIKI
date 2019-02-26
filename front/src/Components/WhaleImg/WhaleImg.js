import React from "react";
import styled from "styled-components";

const WhaleImg = ({ width, height, isRadius }) => {
  return <Whale width={width} height={height} radius={isRadius} />;
};

const Whale = styled.img.attrs({
  src:
    "https://user-images.githubusercontent.com/23521909/53392493-e63f3080-39dc-11e9-8cdb-4a7298701f0c.png"
})`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => (props.radius ? "50%;" : "0")};
  background-color: skyblue;
`;

export default WhaleImg;
