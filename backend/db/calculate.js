import { makingContentModel } from "./models";

export const searchResult = async ({ contentsName }) => {
  const contentModel = makingContentModel({ title: contentsName });
  const documents = await contentModel.findOne({}).sort({ makingTime: -1 });
  if (documents) return returnSearchResult(title, summary);
  else return returnSearchResult();
};

const returnSearchResult = (title = "", summary = "") => {
  return {
    title: [title],
    explanation: [summary]
  };
};
