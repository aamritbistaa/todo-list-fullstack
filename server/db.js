import mongoose from "mongoose";
import dotenv from "dotenv";

const connection = () => {
  const mongoose_Url =
    "mongodb+srv://aamritbistaa:J8wlrE7Nn5jancab@cluster0.a15ztnt.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(mongoose_Url, { useNewUrlParser: true });
  console.log(mongoose_Url);

  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("db disconnected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("db error", err.message);
  });
};

export default connection;
