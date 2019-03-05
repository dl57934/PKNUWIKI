import gql from "graphql-tag";
import { CONTENT_FRAGMENT } from "Components/fragment";

const VIEWER_QUERY = gql`
  query VIEWER_QUERY($contentName: String!) {
    getContent(contentName: $contentName) {
      ...ContentParts
    }
  }
  ${CONTENT_FRAGMENT}
`;

export default VIEWER_QUERY;
