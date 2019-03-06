import gql from "graphql-tag";

const SIGN_UP_PAGE = gql`
  mutation signUp($name: String!, $id: String!, $password: String!) {
    signUp(name: $name, id: $id, password: $password)
  }
`;

export default SIGN_UP_PAGE;
