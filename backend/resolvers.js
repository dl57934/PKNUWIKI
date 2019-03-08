import makingContentModel from "./db/models";
import { searchResult } from "./db/calculate";
import {
  getContent,
  getHistory,
  saveContent
} from "./db/EditAndWriteCalculate";

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
    login: (_, { id, password }) => {
      console.log(id, password);
      return true;
    },
    signUp: (_, { id, password, name }) => {
      console.log(id, password, name);
      return true;
    }
  }
};

export default resolvers;
