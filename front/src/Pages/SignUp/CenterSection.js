import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInputTag from "Hooks/inputTag";
import Title from "Components/Title";
import WebTitle from "Components/WebTitle";
import BasicButton from "Components/BasicButton";
import PasswordSameCheckCircle from "Components/PasswordSameCheckCircle";
import { Link } from "react-router-dom";

const CenterSection = () => {
  const id = useInputTag("");
  const password = useInputTag("");
  const name = useInputTag("");
  const passwordCheck = useInputTag("");
  const email = useInputTag("");
  const [isSamePassword, setPassword] = useState(false);

  useEffect(() => {
    if (password.value === passwordCheck.value) setPassword(true);
    else setPassword(false);
  }, [password.value, passwordCheck.value]);

  return (
    <Container>
      <Title text={`회원가입`} />
      <WebTitle />
      <InputBox>
        <Preface>이름</Preface>
        <LoginInput placeholder="이름을 입력해주세요." type="text" {...name} />
        <Preface>UserName</Preface>
        <LoginInput placeholder="id를 입력해주세요." type="id" {...id} />
        <Preface>Password</Preface>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...password}
        />
        <Preface>Password Check</Preface>
        <PasswordCheckBox>
          <LoginInput
            placeholder="동일한 비밀번호를 입력해주세요!"
            type="password"
            {...passwordCheck}
            passwordCheck={true}
          />
          <PasswordSameCheckCircle isSame={isSamePassword} />
        </PasswordCheckBox>
        <Preface>Email</Preface>
        <LoginInput
          type="email"
          placeholder="email을 입력해주세요."
          {...email}
        />
      </InputBox>
      <ButtonBox>
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

const PasswordCheckBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  margin-left: ${props => (props.passwordCheck ? "30px" : 0)};
`;

const Preface = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 5%;
  margin-bottom: 2%;
  font-weight: 600;
  font-size: 20px;
`;