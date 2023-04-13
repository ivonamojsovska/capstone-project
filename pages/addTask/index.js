import { React, useState } from "react";
import { useRouter } from "next/router";

const AddTask = () => {
    const router = useRouter()
    const [task, setTask] = useState({ title: null, time: null, place: null });

    const handleChange = (e) => {
        const newTask = { ...task };
        newTask[e.target.name] = e.target.value;
        setTask(newTask);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/todos', {
            method: 'post',
            headers: { "Content-Type": "application/json" }
            , body: JSON.stringify(task)
        })
        e.target.reset();
        router.push('/')

    };

    return (
        <>
            <div className="container">
                <p>Let's add some tasks...</p>
                <div className="add__task-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form__input">
                            <input
                                type="text"
                                name="name"
                                placeholder="What you need to do?"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form__input">
                            <input
                                type="text"
                                name="time"
                                placeholder="What time?"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form__input">
                            <input
                                type="text"
                                name="place"
                                placeholder="Where?"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form__button">
                            <input type="submit" value="Add Task" className="add-button" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};



export default AddTask;
