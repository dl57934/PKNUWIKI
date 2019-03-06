import gql from "graphql-tag";

const SIGN_UP_PAGE = gql`
  mutation signUp(
    $name: String!
    $id: String!
    $password: String!
    $email: String
  ) {
    signUp(name: $name, id: $id, password: $password, email: $email)
  }
`;

export default SIGN_UP_PAGE;
