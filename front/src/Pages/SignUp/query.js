import gql from "graphql-tag";
import { SIGN_FRAGMENT } from "Components/fragment";

const SIGN_UP_PAGE = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      ...SignResultParts
    }
  }
  ${SIGN_FRAGMENT}
`;

export default SIGN_UP_PAGE;
