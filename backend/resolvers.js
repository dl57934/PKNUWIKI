import makingContentModel from "./db/models";
import { searchResult } from "./db/calculate";
import {
  getContent,
  getHistory,
  saveContent
} from "./db/EditAndWriteCalculate";
import signIn from "./auth/signIn";
import signUp from "./auth/signUp";

const resolvers = {
  Query: {
    firstSchema: () => "First Schema",
    searchResult: (_, { contentsName }) => searchResult({ contentsName }),
    getContent: (_, { contentName }) => getContent({ contentName }),
    getHistory: (_, { contentName, makingTime }) =>
      getHistory(contentName, makingTime)
  },
  Mutation: {
    saveContent: (_, { contentName, markdown, hashTag }) =>
      saveContent({ contentName, markdown, hashTag }),
    signIn: (_, { email, password }) => signIn({ email, password }),
    signUp: (_, { email, password, name }) => signUp({ email, password, name })
  }
};

export default resolvers;
