import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import useInputTag from "./Components/InputTag";

const Header = () => {
  return (
    <Container>
      <HomeLink id="ToHome" href={"/부경위키:대문"} width={document.width}>
        <Whale id="whale" />
        <MainText id="MainText">PKNU WIKI</MainText>
      </HomeLink>
      <SearchInput id="search" {...useInputTag} />
      <LoginText id="login">로그인</LoginText>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-color: skyblue;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  @media all and (max-width: 700px) {
    background-color: black;
    #search {
      font-size: 12px;
      margin-left: 30px;
      width: 200px;
    }
  }
  @media (max-width: 470px) {
    background-color: green;
    #search {
      font-size: 8px;
      margin-left: 0;
      width: 150px;
      margin-left: 10px;
    }
    #MainText {
      font-size: 15px;
    }
    #whale {
      width: 40px;
      height: 40px;
    }
    #login {
      font-size: 15px;
    }
  }
`;

const HomeLink = styled.a`
  color: white;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-weight: bold;
  width: 15%;
`;

const Whale = styled.img.attrs({
  src:
    "https://user-images.githubusercontent.com/23521909/53392493-e63f3080-39dc-11e9-8cdb-4a7298701f0c.png"
})`
  width: 60px;
  height: 60px;
`;

const MainText = styled.p`
  font-size: 140%;
  margin: 0;
  margin-top: 8%;
`;

const SearchInput = styled.input.attrs({
  placeholder: "부경대학교에 대해 검색해주세요!"
})`
  width: 30%;
  height: 25%;
  font-size: 15px;
  border-radius: 6px;
  font-weight: 600;
  ::placeholder {
    text-align: center;
  }
  margin-left: -10%;
`;

const LoginText = styled.a.attrs({
  href: "/login"
})`
  color: white;
  font-weight: 700;
  text-decoration: none;
  font-size: 20px;
`;
