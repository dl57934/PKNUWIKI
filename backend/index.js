import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import mysql from "mysql";

const MONGO_DB_URL = "mongodb://localhost:27017/local";

const mariaDB = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dngmadl14",
  database: "PKNU_WIKI_User"
});

const connectDB = () => {
  mongoose.connect(MONGO_DB_URL);
  mariaDB.connect(() => {
    console.log(`Connect MariaDB localhost:3306`);
  });
  const mongodb = mongoose.connection;
  mongodb.on("error", error => console.log(error));
  mongodb.on("open", () => console.log(`Connect MongoDB ${MONGO_DB_URL}`));
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});

server.start(() => {
  console.log("Graphql Server Running at localhost:4000");
  connectDB();
});
