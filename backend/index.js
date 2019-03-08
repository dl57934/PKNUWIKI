import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import connectDB from "./db/connectDB";

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});

server.start(() => {
  console.log("Graphql Server Running at localhost:4000");
  connectDB();
});
