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

const searchResult = ({ contentsName }) => {
  return {
    title: [contentsName],
    explanation: ["zz"]
  };
};

const getContent = ({ contentName }) => {
  return {
    title: contentName,
    markdown: "#### hihi",
    hashTag: ["#hihi", "#안녕하세요."]
  };
};

const saveContent = ({ contentName, markdown, hashTag }) => {
  console.log(contentName, markdown, hashTag);
  return true;
};
