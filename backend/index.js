import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import mongoose from "mongoose";

const DB_URL = "mongodb://localhost:27017/local";

const connectDB = () => {
  mongoose.connect(DB_URL);
  const database = mongoose.connection;
  database.on("error", error => console.log(error));
  database.on("open", () => console.log(`ConnectDB ${DB_URL}`));
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});

server.start(() => {
  console.log("Graphql Server Running at localhost:4000");
  connectDB();
});
