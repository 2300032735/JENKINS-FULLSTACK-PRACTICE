import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", status: "Pending" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask({ title: "", description: "", dueDate: "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Title"
        value={task.title}
        onChange={e => setTask({ ...task, title: e.target.value })}
        required
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Description"
        value={task.description}
        onChange={e => setTask({ ...task, description: e.target.value })}
        required
        style={{ marginRight: "10px" }}
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={e => setTask({ ...task, dueDate: e.target.value })}
        required
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
