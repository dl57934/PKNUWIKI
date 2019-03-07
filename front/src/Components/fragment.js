import gql from "graphql-tag";

export const CONTENT_FRAGMENT = gql`
  fragment ContentParts on Content {
    title
    markdown
    hashTag
    makingTime
  }
`;
