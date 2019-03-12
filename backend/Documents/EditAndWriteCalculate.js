import { makingContentModel, makingChangeDocumentModel } from "../db/models";

export const getContent = async ({ contentName }) => {
  const result = await bringContentFromDB(contentName);
  const editTimeArray = getEditTimeArray(contentName);
  const writerArray = getWriterArray(contentName);
  const currentContent = result[result.length - 1];

  if (currentContent)
    return getContentReturn(
      currentContent.title,
      currentContent.content,
      currentContent.hashTag,
      editTimeArray,
      currentContent.summary,
      writerArray
    );
  else return getContentReturn();
};

export const getHistory = async (contentName, makingTime) => {
  const result = await makingContentModel({
    title: contentName
  }).find({ makingTime });

  const editTimeArray = getEditTimeArray(contentName);
  const writerArray = getWriterArray(contentName);
  const { title, content, hashTag, summary } = result[0];

  return getContentReturn(
    title,
    content,
    hashTag,
    editTimeArray,
    summary,
    writerArray
  );
};

const getContentReturn = (
  title = "",
  markdown = "",
  hashTag = [""],
  makingTime = [""],
  summary = "",
  writer = [""]
) => {
  return {
    title,
    markdown,
    hashTag,
    makingTime,
    summary,
    writer
  };
};

const getWriterArray = async contentName => {
  const writers = await bringOnlyWriter(contentName);

  let writerArray = new Array();
  writers.map(data => writerArray.push(data.writer));
  return writerArray;
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

export const saveContent = async ({
  contentName,
  markdown,
  hashTag,
  summary,
  writer
}) => {
  let contentModel = makingContentModel({ title: contentName });
  let currentlyListModel = makingChangeDocumentModel();
  const nowTime = getNowTime();

  if (await existAtCurrentlyChange(currentlyListModel, contentName))
    await currentlyListModel.remove({ title: contentName });

  const currentlyModel = new currentlyListModel({
    title: contentName,
    makingTime: nowTime
  });

  const content = new contentModel({
    title: contentName,
    content: markdown,
    hashTag,
    summary,
    makingTime: nowTime,
    writer
  });
  await currentlyModel.save();
  await content.save();
  return true;
};

export const getCurrentlyChangeDocument = async () => {
  let currentlyListModel = makingChangeDocumentModel();
  const result = await currentlyListModel.find({});
  return result.reverse().slice(0, 10);
};

const existAtCurrentlyChange = async (currentlyListModel, title) => {
  const findResult = await currentlyListModel.find({ title });
  if (findResult.length > 0) return true;
  else return false;
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

const bringOnlyWriter = async contentName => {
  const writer = await makingContentModel({
    title: contentName
  }).find({}, { writer: true, _id: false });
  return writer;
};
