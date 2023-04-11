import mongoose, { Model } from "mongoose";

export const connect = async () => {
  const conn = await mongoose
    .connect(process.env.MONGO_URI)
    .catch((err) => console.log(err));

  mongoose.connection
    .on("open", () => console.log("connected to mongo"))
    .on("error", (error) => console.log(error));

  const TodoSchema = new mongoose.Schema({
    title: String,
    time: String,
    place: String,
  });

  const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

  return { conn, Todo };
};
