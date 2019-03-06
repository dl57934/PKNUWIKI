import gql from "graphql-tag";

const LOGIN_PAGE = gql`
  mutation login($id: String!, $password: String!) {
    login(id: $id, password: $password)
  }
`;

export default LOGIN_PAGE;
