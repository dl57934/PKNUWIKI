import gql from "graphql-tag";

export const jwtCheckResult = (loading, data) => {
  if (loading) console.log("loading");
  else if (!data.isValidationJwt) return initialJWT();
  return (window.location.href = "/부경위키:대문");
};

export const issueJWT = jwt => {
  localStorage.setItem("jwt", jwt);
};

export const initialJWT = () => {
  localStorage.removeItem("jwt");
  alert("session이 만료되었습니다 다시 로그인 해주세요");
  return (window.location.href = "/signIn");
};

export const CHECK_VERIFY_JWT = gql`
  query isValidationJwt($jwt: String!) {
    isValidationJwt(jwt: $jwt)
  }
`;
