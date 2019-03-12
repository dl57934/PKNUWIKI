import gql from "graphql-tag";

export const CONTENT_FRAGMENT = gql`
  fragment ContentParts on Content {
    title
    markdown
    hashTag
    makingTime
    summary
    writer
  }
`;

export const SIGN_FRAGMENT = gql`
  fragment SignResultParts on SignUpResult {
    message
    success
  }
`;
