import gql from "graphql-tag";

const VIEWER_QUERY = gql`
  query VIEWER_QUERY($contentName: String!) {
    getContent(contentName: $contentName) {
      title
      markdown
    }
  }
`;

export default VIEWER_QUERY;
