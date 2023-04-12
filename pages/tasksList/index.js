import { getTodo } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from "next/router";

const TasksList = ({ todos }) => {
    const router = useRouter()

    const handleDelete = async (id) => {
        //console.log(todos.map(todo => todo._id))
        // make delete request when button is clicked
        await fetch("/api/todos/" + id, {
            method: "delete",
        });
        router.push('/')
    }




    return (
        <section className="task__list">
            <div className="container task__list-container">
                <h3>This is what you have...</h3>
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
                                <div>
                                    <button className="delete-btn" onClick={() => handleDelete(todo._id)}>X</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Link href='/addTask'>
                    <div className="add__task-btn">
                        <button className="flat-button">Add Task</button>
                    </div></Link>
            </div>


        </section>

    );
};

// This page will eventually display the most up to date list of our dogs, so it should be server-side rendered. To designate that we will page is serversideprops!
// export async function getServerSideProps(ctx) {
//     const id = ctx.query.id
//     console.log(id)
//     const todo = JSON.parse(JSON.stringify(await getTodo(id)))
//     console.log(todo)

//     // This function should return an object with a props property with all the props we want for this page
//     // keep in mind this function is run server-side
//     return {
//         props: {
//             title: "Todo App - Main Page",
//             description: "This page will show us all our Todo",
//             todo
//         },
//     };





export default TasksList;