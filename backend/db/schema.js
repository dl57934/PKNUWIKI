import mongoose from "mongoose";

export const ContentSchema = mongoose.Schema({
  title: { type: String },
  summary: { type: String },
  content: { type: String },
  hashTag: { type: [String] },
  makingTime: { type: String }
});

export const CurrentlyDocument = mongoose.Schema({
  title: { type: String },
  makingTime: { type: String }
});
