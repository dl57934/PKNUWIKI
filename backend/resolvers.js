const resolvers = {
  Query: {
    firstSchema: () => "First Schema",
    searchResult: (_, { contentsName }) => searchResult({ contentsName })
  }
};

export default resolvers;

const searchResult = ({ contentsName }) => {
  console.log(contentsName);
  return {
    title: "hihi",
    contents: "zz"
  };
};
