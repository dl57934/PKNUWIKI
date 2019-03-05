import gql from "graphql-tag";
import { CONTENT_FRAGMENT } from "Components/fragment";

export const EDIT_PAGE = gql`
  query getContent($contentName: String!) {
    getContent(contentName: $contentName) {
      ...ContentParts
    }
  }
  ${CONTENT_FRAGMENT}
`;

export const EDIT_WRITE_PAGE = gql`
  mutation saveContent($contentName: String!, $markdown: String!) {
    saveContent(contentName: $contentName, markdown: $markdown)
  }
`;
