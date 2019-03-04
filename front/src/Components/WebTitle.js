import React from "react";
import styled from "styled-components";

const WebTitle = () => {
  return (
    <Description id="description">
      부경대학교 학우들이 써내려가는 <br />
      <Name color="skyblue">PKNU WIKI</Name>
    </Description>
  );
};

const Name = styled.span`
  color: ${props => props.color};
`;

const Description = styled.h2`
  text-align: center;
  font-size: 40px;
  color: grey;
  @media (max-width: 505px) {
    transition-duration: 0.5s;
    font-size: 30px;
  }
`;

export default WebTitle;
