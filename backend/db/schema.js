import mongoose from "mongoose";
import makingContentModel from "./models";

export const ContentSchema = mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  hashTag: { type: [String], required: true }
});

ContentSchema.static("findByTitle", async (title, ver) => {
  return await makingContentModel(title).findOne({ ver });
});
