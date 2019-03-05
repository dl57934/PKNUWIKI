import gql from "graphql-tag";

const SEARCH_RESULT = gql`
  query SEARCH_RESULT($contentsName: String!) {
    searchResult(contentsName: $contentsName) {
      title
      contents
    }
  }
`;

export default SEARCH_RESULT;
