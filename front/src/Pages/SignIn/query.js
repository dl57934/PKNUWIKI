import gql from "graphql-tag";

const SIGN_IN_PAGE = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      message
      success
      jwt
    }
  }
`;

export default SIGN_IN_PAGE;
