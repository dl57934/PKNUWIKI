import React from "react";
import styled from "styled-components";
import useInputTag from "Hooks/inputTag";
import { MainColor } from "Components/CssCollection";
import { signOut } from "Hooks/ManageJWT";

const SearchDocument = e => {
  const {
    target: { value }
  } = e;
  if (e.keyCode === 13) {
    window.location = `/searchResult/${value}`;
  }
};

const Header = props => {
  const search = useInputTag("");
  const jwt = localStorage.getItem("jwt");
  return (
    <Container>
      <HomeLink id="ToHome" href={"/부경위키:대문"} width={document.width}>
        <Whale id="whale" />
        <MainText id="MainText">PKNU WIKI</MainText>
      </HomeLink>
      <SearchInput
        id="search"
        {...search}
        type="text"
        onKeyUp={SearchDocument}
      />
      <LoginText
        id="login"
        href={jwt ? "" : "/signIn"}
        onClick={jwt ? () => signOut() : ""}
      >
        {jwt ? "로그아웃" : "로그인"}
      </LoginText>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-color: ${MainColor};
  align-items: center;
  justify-content: space-around;
  height: 80px;
  @media all and (max-width: 1000px) {
    #search {
      font-size: 15px;
      margin-left: 30px;
      ::placeholder {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 470px) {
    #search {
      font-size: 11pgx;
      margin-left: 10px;
      padding: 3px;
      ::placeholder {
        font-size: 11px;
      }
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
  width: 38%;
  height: 20px;
  font-size: 16px;
  border-radius: 6px;
  font-weight: 600;
  padding: 5px;
  ::placeholder {
    text-align: center;
    font-size: 16px;
  }
  margin-left: -10%;
`;

const LoginText = styled.a`
  color: white;
  font-weight: 700;
  text-decoration: none;
  font-size: 20px;
`;
