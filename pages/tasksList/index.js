import { getTodo } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'

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

    const handleChecked = () => {

    }




    return (
        <section className="task__list">
            <div className="task__list-container">
                <p>This is what you have...</p>
                <div className="task__item">
                    {todos.map((todo) => {
                        return (
                            <div key={todo._id} className="task__content">
                                <div className="task__text">
                                    <div className="task__name">
                                        {todo.name}
                                    </div>
                                    <div className="task__time">
                                        {todo.time}
                                    </div>
                                </div>
                                <div className="task__icons">
                                    <div className="task__icon">
                                        <button className="icons-btn" onClick={handleChecked}><AiOutlineCheckCircle /></button>
                                    </div>
                                    <div className="task__icon">
                                        <button className="icons-btn"><CiEdit /></button>
                                    </div>
                                    <div className="task__icon">
                                        <button className="icons-btn" onClick={() => handleDelete(todo._id)}><BsTrash /></button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="add__task">
                    <Link href='/addTask'><button className="add-button">Add Task</button></Link>
                </div>
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