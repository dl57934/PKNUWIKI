import gql from "graphql-tag";
import { CONTENT_FRAGMENT } from "Components/fragment";

export const VIEWER_QUERY = gql`
  query VIEWER_QUERY($contentName: String!) {
    getContent(contentName: $contentName) {
      ...ContentParts
    }
  }
  ${CONTENT_FRAGMENT}
`;

export const HISTORY_QUERY = gql`
  query HISTORY_QUERY($contentName: String!, $makingTime: String!) {
    getHistory(contentName: $contentName, makingTime: $makingTime) {
      ...ContentParts
    }
  }
  ${CONTENT_FRAGMENT}
`;
