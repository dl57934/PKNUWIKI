import React from "react";
import styled from "styled-components";

const PasswordSameCheckCircle = ({ isSame }) => {
  return (
    <Circle isSame={isSame}>
      <Img src="https://user-images.githubusercontent.com/23521909/53610986-47027f00-3c10-11e9-92bf-e82f66218cac.png" />
    </Circle>
  );
};

export default PasswordSameCheckCircle;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isSame ? "green" : "red")};
`;

const Img = styled.img`
  margin-top: 5px;
  margin-left: 2px;
  width: 15px;
  height: 15px;
`;
