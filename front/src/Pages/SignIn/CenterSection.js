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
  const email = useInputTag("");
  const password = useInputTag("");

  const sendLogin = useMutation(LOGIN_PAGE, {
    update: (proxy, mutationResult) => {
      const { success, message } = mutationResult.data.signIn;

      if (success) {
        alert(message);
        window.location.href = `http://localhost:3000/부경위키:대문`;
      } else alert(message);
    },
    variables: {
      email: email.value,
      password: password.value
    }
  });

  return (
    <Container>
      <Title text={`로그인`} />
      <WebTitle />
      <InputBox>
        <Preface>ID</Preface>
        <LoginInput placeholder="id를 입력해주세요." type="id" {...email} />
        <Preface>Password</Preface>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...password}
        />
      </InputBox>
      <ButtonBox>
        <LoginButton onClick={sendLogin}>로그인</LoginButton>
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

const LoginButton = styled.button`
  border: 1px solid grey;
  font-weight: 600;
  font-size: 15px;
  width: 80px;
  height: 50px;
  margin-right: 10px;
`;

const Preface = styled.h3`
  margin-top: 5%;
  flex: left;
  text-align: left;
`;
