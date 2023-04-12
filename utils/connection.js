import mongoose, { Schema, model, models } from "mongoose";

const connect = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI).catch((err) => console.log(err));

    mongoose.connection.on("open", () => console.log("connected to mongo")).on("error", (error) => console.log(error));

    const TodoSchema = new Schema({
        title: String,
        time: String,
        place: String,
    });

    const Todo = models.Todo || model("Todo", TodoSchema);

    return { conn, Todo };
};

export default connect