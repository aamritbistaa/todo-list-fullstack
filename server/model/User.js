import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true, //trim all extra spaces
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
  },
  { timespams: true } //automatically creates time of creation
);

const user = mongoose.model("User", userSchema);

export default user;
