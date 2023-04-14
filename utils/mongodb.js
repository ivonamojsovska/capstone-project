import mongoose, { model, models } from "mongoose";

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
        required: [true, "Password is required"],
        select: false
    }

})

// OUR User MODEL (we check that is doesn't already exist to avoid dev server issues)

const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;