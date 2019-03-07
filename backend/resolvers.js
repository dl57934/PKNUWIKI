import makingContentModel from "./db/models";
import { searchResult, getContent, saveContent } from "./db/calculate";

const resolvers = {
  Query: {
    firstSchema: () => "First Schema",
    searchResult: (_, { contentsName }) => searchResult({ contentsName }),
    getContent: (_, { contentName }) => getContent({ contentName })
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
