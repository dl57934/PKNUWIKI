import gql from "graphql-tag";

export const jwtCheckResult = (loading, data) => {
  if (loading) console.log("loading");
  else if (!data.isValidationJwt) return initialJWT();
  return (window.location.href = "/부경위키:대문");
};

export const issueJWT = (jwt, email) => {
  localStorage.setItem("jwt", jwt);
  localStorage.setItem("email", email);
};

export const signOut = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("email");
};

export const initialJWT = () => {
  signOut();
  alert("session이 만료되었습니다 다시 로그인 해주세요");
  return (window.location.href = "/signIn");
};

export const CHECK_VERIFY_JWT = gql`
  query isValidationJwt($jwt: String!) {
    isValidationJwt(jwt: $jwt)
  }
`;
