import todos from "./data.json";
import { connect } from "./connection"

// function to get all todos
export const getTodos = async () => {
    try {
        const { conn, Todo } = await connect(); // get connection and model
        return await Todo.find({}); // find and return all dogs
    } catch (error) {
        return { error: "Error in getTodos function" };
    }
};

// function to get singleDog
export const getTodo = async (id) => {
    try {
        const { conn, Todo } = await connect(); // get connection and model
        return await Todo.findById(id); // find and return all dogs
    } catch (error) {
        return { error: "Error in getTodo function" };
    }
};

// function create a dog
export const createTodo = async (newTodo) => {
    try {
        const { conn, Todo } = await connect(); // get connection and model
        return await Todo.create(newTodo); // create and return new dog
    } catch (error) {
        return { error: "Error in createTodo function" };
    }
};

// update a dog
export const updateTodo = async (updatedTodo, id) => {
    try {
        const { conn, Todo } = await connect(); // get connection and model
        return await Todo.findByIdAndUpdate(id, updatedTodo, { new: true }); // update and return dog
    } catch (error) {
        return { error: "Error in updateTodo function" };
    }
};

// delete a todo
export const destroyTodo = async (id) => {
    try {
        const { conn, Todo } = await connect(); // get connection and model
        return await Todo.findByIdAndRemove(id); // destroy and return dog
    } catch (error) {
        return { error: "Error in destroyTodo function" };
    }
};
