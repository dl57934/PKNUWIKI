import mongoose from "mongoose";

const CommonOption = { type: String, required: true };

export const ContentSchema = mongoose.Schema({
  title: CommonOption,
  summary: CommonOption,
  content: CommonOption,
  hashTag: { type: [String], required: true },
  makingTime: CommonOption,
  writer: CommonOption
});

export const CurrentlyDocumentSchema = mongoose.Schema({
  title: CommonOption,
  makingTime: CommonOption
});
