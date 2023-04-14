//IMPORT MONGOOSE
import mongoose from "mongoose";

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

    //OUR User Schema

    const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            unique: true,
            required: [true, 'Email is required!'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"],
        },
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            minLength: [4, "Full name should be atleast 4 characters long"],
            maxLength: [30, "Full name should be less than 30 characters"]
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }

    })

    // OUR TODO MODEL (we check that is doesn't already exist to avoid dev server issues)
    const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

    // OUR User MODEL (we check that is doesn't already exist to avoid dev server issues)

    const User = mongoose.models.User || mongoose.model("User", UserSchema)

    // return the connection and the Todo model
    return { conn, Todo, User };
};
