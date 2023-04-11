"use client";

import { React, useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({ title: null, time: null, place: null });

  const handleChange = (e) => {
    const newTask = { ...task };
    newTask[e.target.name] = e.target.value;
    setTask(newTask);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    e.target.reset();
  };

  return (
    <>
      <div className="add__task-container">
        <h3>Add Task</h3>
        <div className="add__task-form">
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <input
                type="text"
                name="title"
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
            <input type="submit" value="Add Task" className="flat-button" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
