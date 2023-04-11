async function fetchTodos() {
  const response = await fetch("http:localhost:3001/api/todos");
  const todos = await response.json();
  return todos;
}

const TasksList = async () => {
  let num = 1;
  const todos = await fetchTodos();
  return (
    <div className="task__list-container">
      <h3>Tasks List</h3>
      <ul className="task__list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {num++}.{todo.title} - {todo.place} - {todo.time}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TasksList;
