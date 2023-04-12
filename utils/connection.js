//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";

// connection function
export const connect = async () => {
    //CREATE THE MONGOOSE CONNECTION
    const conn = await mongoose
        .connect(process.env.MONGO_URI)
        .catch((err) => console.log(err));

    // connection alerts
    mongoose.connection
        .on("open", () => console.log("connected to mongo"))
        .on("error", (error) => console.log(error));

    // OUR Todo Schema
    const TodoSchema = new mongoose.Schema({
        name: String,
        place: String,
        time: String,
    });

    // OUR TODO MODEL (we check that is doesn't already exist to avoid dev server issues)
    const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

    // return the connection and the Todo model
    return { conn, Todo };
};
