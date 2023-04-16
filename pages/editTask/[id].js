import { getTodo } from "@/utils/actions";
import { useState } from "react";
import { useRouter } from "next/router";

const EditTask = ({ todo }) => {
    const router = useRouter()

    const [formState, setFormState] = useState({ ...todo })

    const handleChange = (e) => {
        //setFormState(...formState, [e.target.name] = e.target.value)
        const editTodo = { ...formState }
        editTodo[e.target.name] = e.target.value
        setFormState(editTodo)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`/api/todos/${todo._id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState)
        })
        router.push(`/`)

    }

    return (<><div className="container edit__task-page" >
        <p>Edit Task: {formState.name}</p>
        <div className="add__task-form">
            <form onSubmit={handleSubmit}>
                <div className="form__input">
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__input">
                    <input
                        type="text"
                        name="time"
                        value={formState.time}

                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__input">
                    <input
                        type="text"
                        name="place"
                        value={formState.place}

                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form__button">
                    <input type="submit" value="Edit Task" className="add-button" />
                </div>

            </form>
        </div>
    </div>
    </>);
}

export default EditTask;


export async function getServerSideProps(ctx) {
    const id = ctx.query.id;
    console.log(id)
    const todo = JSON.parse(JSON.stringify(await getTodo(id)));
    console.log(todo)

    return {
        props: {
            title: "Todo App - Edit Todo",
            description: "This page is for editing an existing todo",
            todo,
        },
    };
}
