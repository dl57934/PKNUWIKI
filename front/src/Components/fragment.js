import gql from "graphql-tag";

export const CONTENT_FRAGMENT = gql`
  fragment ContentParts on Content {
    title
    markdown
    hashTag
    makingTime
  }
`;

export const SIGN_FRAGMENT = gql`
  fragment SignResultParts on SignResult {
    message
    success
  }
`;
