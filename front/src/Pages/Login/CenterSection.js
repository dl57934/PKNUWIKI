import React from "react";
import styled from "styled-components";
import useInputTag from "Hooks/inputTag";
import Title from "Components/Title";
import WebTitle from "Components/WebTitle";
import BasicButton from "Components/BasicButton";

const CenterSection = () => {
  const id = useInputTag("");
  const password = useInputTag("");
  return (
    <Container>
      <Title text={`로그인`} />
      <WebTitle />
      <InputBox>
        <Preface>UserName</Preface>
        <LoginInput placeholder="id를 입력해주세요." type="id" {...id} />
        <Preface>Password</Preface>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...password}
        />
      </InputBox>
      <ButtonBox>
        <BasicButton text={"로그인"} />
        <BasicButton
          text={"회원가입"}
          backgroundColor={"#87CEFA"}
          color={"white"}
        />
      </ButtonBox>
    </Container>
  );
};

export default CenterSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  margin-left: 70%;
  margin-top: 80px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 505px) {
    font-size: 15px;
  }
`;

const LoginInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
`;

const Preface = styled.h3`
  margin-top: 5%;
  flex: left;
  text-align: left;
`;
