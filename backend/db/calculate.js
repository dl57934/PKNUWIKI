import makingContentModel from "./models";

export const searchResult = ({ contentsName }) => {
  return {
    title: [contentsName],
    explanation: ["zz"]
  };
};

export const getContent = async ({ contentName }) => {
  const result = await bringContentFromDB(contentName);

  const currentContent = result[result.length - 1];

  if (currentContent)
    return {
      title: currentContent.title,
      markdown: currentContent.content,
      hashTag: currentContent.hashTag,
      historyLength: result.length,
      makingTime: currentContent.makingTime
    };
  else
    return {
      title: "",
      markdown: "",
      hashTag: [""],
      historyLength: 0,
      makingTime: ""
    };
};

export const getHistoryLength = async ({ contentName }) => {};

const getNowTime = () => {
  const now = new Date();
  return `${now.getFullYear()}-${isAppendZero(now.getMonth())}-${isAppendZero(
    now.getDate()
  )} ${isAppendZero(now.getHours())}:${isAppendZero(
    now.getMinutes()
  )}:${isAppendZero(now.getSeconds())}`;
};

const isAppendZero = value => {
  return value < 10 ? `0${value}` : value;
};

export const saveContent = async ({ contentName, markdown, hashTag }) => {
  let contentModel = makingContentModel({ title: contentName });

  const content = new contentModel({
    title: contentName,
    content: markdown,
    hashTag,
    summary: "hihi",
    makingTime: getNowTime()
  });
  content.save();
  return true;
};

const bringContentFromDB = async contentName => {
  const result = await makingContentModel({
    title: contentName
  }).find({ title: contentName });

  return result;
};
