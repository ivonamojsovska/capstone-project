
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { getTodos } from "@/utils/actions";

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

    const handleChecked = (id) => {
        const div = document.getElementById(id)
        div.style.opacity = 0.4

    }

    return (
        <section className="task__list">
            <div className="task__list-container">
                <p>This is what you have...</p>
                <div className="task__item">
                    {todos.map((todo) => {
                        return (
                            <div key={todo._id} id={todo._id} className="task__content">
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
                                        <button className="icon-btn" onClick={() => handleChecked(todo._id)}><AiOutlineCheckCircle /></button>
                                    </div>
                                    <div className="task__icon">
                                        <Link href={`/editTask/${todo._id}`}><button className="icon-btn"><CiEdit /></button></Link>

                                    </div>
                                    <div className="task__icon">
                                        <button className="icon-btn" onClick={() => handleDelete(todo._id)}><BsTrash /></button>
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


        </section >

    );
};


export async function getServerSideProps(ctx) {

    const todos = JSON.parse(JSON.stringify(await getTodos()))


    // This function should return an object with a props property with all the props we want for this page
    // keep in mind this function is run server-side
    return {
        props: {

            todos
        },
    };
}





export default TasksList;