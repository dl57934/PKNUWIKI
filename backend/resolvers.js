const resolvers = {
  Query: {
    firstSchema: () => "First Schema",
    searchResult: (_, { contentsName }) => {}
  }
};

export default resolvers;
