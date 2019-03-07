import mongoose from "mongoose";
import { ContentSchema } from "./schema";

const makingContentModel = ({ title }) => {
  return mongoose.model(title, ContentSchema);
};

export default makingContentModel;
