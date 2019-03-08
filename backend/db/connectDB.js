import mongoose from "mongoose";
import mysql from "mysql";

const MONGO_DB_URL = "mongodb://localhost:27017/local";

export const mariaDB = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dngmadl14",
  database: "sys"
});

const connectDB = () => {
  mongoose.connect(MONGO_DB_URL);

  const mongodb = mongoose.connection;
  mongodb.on("error", error => console.log(error));
  mongodb.on("open", () => console.log(`Connect MongoDB ${MONGO_DB_URL}`));
};

export default connectDB;
