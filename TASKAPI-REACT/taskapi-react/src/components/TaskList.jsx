export default function TaskList({ tasks, onUpdate, onDelete }) {
  if (!tasks.length) return <p>No tasks yet.</p>;

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => onUpdate(task.id, { ...task, status: "Done" })} style={{ marginRight: "5px" }}>
            Mark Done
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
