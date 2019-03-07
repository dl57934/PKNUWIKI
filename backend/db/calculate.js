import makingContentModel from "./models";

export const searchResult = ({ contentsName }) => {
  return {
    title: [contentsName],
    explanation: ["zz"]
  };
};

export const getContent = async ({ contentName }) => {
  const result = await bringContentFromDB(contentName);
  const editTime = await bringEditTime(contentName);

  let editTimeArray = new Array();
  editTime.map(data => editTimeArray.push(data.makingTime));

  const currentContent = result[result.length - 1];

  if (currentContent)
    return getContentReturn(
      currentContent.title,
      currentContent.content,
      currentContent.hashTag,
      result.length,
      editTimeArray
    );
  else getContentReturn();
};

const getContentReturn = (
  title = "",
  markdown = "",
  hashTag = [""],
  historyLength = 0,
  makingTime = [""]
) => {
  return {
    title,
    markdown,
    hashTag,
    historyLength,
    makingTime
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
  }).find({});
  return result;
};

const bringEditTime = async contentName => {
  const makingTime = await makingContentModel({
    title: contentName
  }).find({}, { makingTime: true, _id: false });
  return makingTime;
};
