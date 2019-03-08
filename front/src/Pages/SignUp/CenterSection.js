import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useInputTag from "Hooks/inputTag";
import Title from "Components/Title";
import WebTitle from "Components/WebTitle";
import { BasicButtonCss } from "Components/CssCollection";
import PasswordSameCheckCircle from "Components/PasswordSameCheckCircle";
import { useMutation } from "react-apollo-hooks";
import SIGN_UP_PAGE from "./query";

const CenterSection = () => {
  const id = useInputTag("");
  const password = useInputTag("");
  const name = useInputTag("");
  const passwordCheck = useInputTag("");
  const [isSamePassword, setPassword] = useState(false);

  useEffect(() => {
    if (password.value === passwordCheck.value) setPassword(true);
    else setPassword(false);
  }, [password.value, passwordCheck.value]);

  const signUp = useMutation(SIGN_UP_PAGE, {
    update: (proxy, mutationResult) => {
      console.log(mutationResult);
    },
    variables: {
      name: name.value,
      password: password.value,
      id: id.value
    }
  });

  const isCorrectSignUp = () => {
    if (isSamePassword) {
      console.log(isSamePassword);
      return true;
    } else return false;
  };

  return (
    <Container>
      <Title text={`회원가입`} />
      <WebTitle />
      <InputBox>
        <Preface>이름</Preface>
        <LoginInput placeholder="이름을 입력해주세요." type="text" {...name} />
        <Preface>아이디</Preface>
        <LoginInput placeholder="id를 입력해주세요." type="email" {...id} />
        <Preface>비밀번호</Preface>
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...password}
        />
        <Preface>비밀번호 확인</Preface>
        <PasswordCheckBox>
          <LoginInput
            placeholder="동일한 비밀번호를 입력해주세요!"
            type="password"
            {...passwordCheck}
            passwordCheck={true}
          />
          <PasswordSameCheckCircle isSame={isSamePassword} />
        </PasswordCheckBox>
      </InputBox>
      <ButtonBox>
        <SignUpButton
          onClick={() =>
            isCorrectSignUp() ? signUp() : alert("입력된 값들을 확인해주세요!!")
          }
        >
          회원가입
        </SignUpButton>
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
    transition-duration: 0.5s;
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
  ime-mode: disabled;
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

const SignUpButton = styled.button`
  ${BasicButtonCss}
  background-color:#87CEFA;
  color: white;
`;
