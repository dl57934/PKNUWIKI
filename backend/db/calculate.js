import { makingContentModel } from "./models";

export const searchResult = async ({ contentsName }) => {
  const contentModel = makingContentModel({ title: contentsName });
  const { title, summary } = await contentModel
    .findOne({})
    .sort({ makingTime: -1 });

  return {
    title: [title],
    explanation: [summary]
  };
};
