import { connect } from "./connection";

export const getTodos = async () => {
  try {
    const { conn, Todo } = await connect();
    return await Todo.find({});
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (newTodo) => {
  try {
    const { conn, Todo } = await connect();
    return await Todo.create(newTodo);
  } catch (error) {
    return { error: "Error in createTodo function" };
  }
};
