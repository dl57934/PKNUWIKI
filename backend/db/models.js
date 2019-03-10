import mongoose from "mongoose";
import { ContentSchema, CurrentlyDocumentSchema } from "./schema";

export const makingContentModel = ({ title }) => {
  return mongoose.model(title, ContentSchema);
};

export const makingChangeDocumentModel = () => {
  return mongoose.model("currentlyChangeDocument", CurrentlyDocumentSchema);
};
