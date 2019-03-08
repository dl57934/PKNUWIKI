import makingContentModel from "./models";

export const searchResult = ({ contentsName }) => {
  return {
    title: [contentsName],
    explanation: ["zz"]
  };
};
