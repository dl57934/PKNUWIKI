import mongoose from "mongoose";
import { ContentSchema } from "./schema";

export const makingContentModel = ({ title }) => {
  return mongoose.model(title, ContentSchema);
};

export const makingChangeDocumentModel = () => {
  return mongoose.model("currentlyChangeDocument", ContentSchema);
};
