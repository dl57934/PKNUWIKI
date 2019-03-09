import gql from "graphql-tag";
import { SIGN_FRAGMENT } from "Components/fragment";

const SIGN_IN_PAGE = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      ...SignResultParts
    }
  }
  ${SIGN_FRAGMENT}
`;

export default SIGN_IN_PAGE;
