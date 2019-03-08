import makingContentModel from "./models";

export const getContent = async ({ contentName }) => {
  const result = await bringContentFromDB(contentName);
  const editTimeArray = getEditTimeArray(contentName);
  const currentContent = result[result.length - 1];

  if (currentContent)
    return getContentReturn(
      currentContent.title,
      currentContent.content,
      currentContent.hashTag,
      editTimeArray
    );
  else return getContentReturn();
};

export const getHistory = async (contentName, makingTime) => {
  const result = await makingContentModel({
    title: contentName
  }).find({ makingTime });

  const editTimeArray = getEditTimeArray(contentName);
  const { title, content, hashTag } = result[0];

  return getContentReturn(title, content, hashTag, editTimeArray);
};

const getContentReturn = (
  title = "",
  markdown = "",
  hashTag = [""],
  makingTime = [""]
) => {
  return {
    title,
    markdown,
    hashTag,
    makingTime
  };
};

const getEditTimeArray = async contentName => {
  const editTime = await bringOnlyEditTime(contentName);

  let editTimeArray = new Array();
  editTime.map(data => editTimeArray.push(data.makingTime));
  return editTimeArray;
};

const getNowTime = () => {
  const now = new Date();
  return `${now.getFullYear()}-${isAppendZero(
    now.getMonth() + 1
  )}-${isAppendZero(now.getDate())} ${isAppendZero(
    now.getHours()
  )}:${isAppendZero(now.getMinutes())}:${isAppendZero(now.getSeconds())}`;
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

const isAppendZero = value => {
  return value < 10 ? `0${value}` : value;
};

const bringContentFromDB = async contentName => {
  const result = await makingContentModel({
    title: contentName
  }).find({});
  return result;
};

const bringOnlyEditTime = async contentName => {
  const makingTime = await makingContentModel({
    title: contentName
  }).find({}, { makingTime: true, _id: false });
  return makingTime;
};
