import gql from "graphql-tag";
import { CONTENT_FRAGMENT } from "Components/fragment";

export const EDIT_PAGE = gql`
  query getContent($contentName: String!, $jwt: String!) {
    getContent(contentName: $contentName) {
      ...ContentParts
    }
    isValidationJwt(jwt: $jwt)
  }
  ${CONTENT_FRAGMENT}
`;

export const EDIT_WRITE_PAGE = gql`
  mutation saveContent(
    $contentName: String!
    $markdown: String!
    $hashTag: [String]!
    $summary: String!
    $writer: String!
  ) {
    saveContent(
      contentName: $contentName
      markdown: $markdown
      hashTag: $hashTag
      summary: $summary
      writer: $writer
    )
  }
`;
