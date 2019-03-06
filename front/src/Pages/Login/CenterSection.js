import React from "react";
import styled from "styled-components";
import useInputTag from "Hooks/inputTag";
import Title from "Components/Title";
import WebTitle from "Components/WebTitle";
import BasicButton from "Components/BasicButton";
import { Link } from "react-router-dom";
import { useMutation } from "react-apollo-hooks";
import LOGIN_PAGE from "./query";

const CenterSection = () => {
  const id = useInputTag("");
  const password = useInputTag("");
  console.log(id.value);
  const sendLogin = useMutation(LOGIN_PAGE, {
    variables: {
      id: id.value,
      password: password.value
    }
  });
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
        <button text={"로그인"} onClick={sendLogin}>
          로그인
        </button>
        <Link to={"/signUp"}>
          <BasicButton
            text={"회원가입"}
            backgroundColor={"#87CEFA"}
            color={"white"}
            url={"/signUp"}
          />
        </Link>
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
  @media (max-width: 520px) {
    margin-left: 50%;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 505px) {
    transition-duration: 0.5s;
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
