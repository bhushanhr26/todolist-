export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>To-Do App</h2>
      <label htmlFor="todo">Create todo: </label>
      <input
        style={{
          width: "250px",
          height: "20px",
        }}
        name="todo"
        type="text"
        placeholder="Create new todo"
        value={todo}
        onChange={onAddInputChange}
      />
    </form>
  );
}
