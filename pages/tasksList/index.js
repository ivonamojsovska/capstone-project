import { getTodos } from "@/utils/actions";
import Link from "next/link";

const TasksList = ({ todos }) => {
    console.log(todos)
    return (
        <section className="task__list">
            <div className="container task__list-container">
                <h3>Tasks List</h3>
                <div className="task__item">
                    {todos.map((todo) => {
                        return (
                            <div key={todo._id} className="task__content">
                                <div className="task__name">
                                    {todo.name}
                                </div>
                                <div className="task__time">
                                    {todo.time}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Link href='/addTask'>
                <div className="add__task-btn">
                    <button className="btn">Add Task</button>
                </div></Link>

        </section>

    );
};

// This page will eventually display the most up to date list of our dogs, so it should be server-side rendered. To designate that we will page is serversideprops!
export async function getServerSideProps(ctx) {
    const todos = JSON.parse(JSON.stringify(await getTodos()));

    console.log(todos)
    // This function should return an object with a props property with all the props we want for this page
    // keep in mind this function is run server-side
    return {
        props: {
            title: "Todo App - Main Page",
            description: "This page will show us all our Todo",
            todos
        },
    };
}


export default TasksList;