import React from "react";
import styled from "styled-components";
import useInputTag from "Hooks/inputTag";
import Title from "Components/Title";
import WebTitle from "Components/WebTitle";

const CenterSection = () => {
  const id = useInputTag("");
  const password = useInputTag("");
  return (
    <Container>
      <Title text={`로그인`} />
      <WebTitle />
      <InputBox>
        <Preface>UserName</Preface>
        <LoginInput type="id" {...id} />
        <Preface>Password</Preface>
        <LoginInput type="password" {...password} />
      </InputBox>
    </Container>
  );
};

export default CenterSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.input`
  width: 30%;
  padding: 10px;
  font-size: 15px;
`;

const Preface = styled.h3`
  margin-top: 5%;
`;
