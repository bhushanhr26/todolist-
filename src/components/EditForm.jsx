import CancelIcon from "@mui/icons-material/Cancel";
export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <h2>Update Todo</h2>
      <label htmlFor="updateTodo">Update todo: </label>
      <input
        style={{
          width: "300px",
          height: "30px",
          fontSize: "xx-large",
        }}
        name="updateTodo"
        type="text"
        placeholder="Enter the item"
        value={currentTodo.text}
        onChange={onEditInputChange}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <button type="submit" onClick={onEditFormSubmit} style={{width:'120px'}}>
            +
          </button>
        </div>

        <div onClick={() => {setIsEditing(false);
        console.log('hello');
        } }style={{width:'120px'}}>
          <CancelIcon color="success" />
        </div>
      </div>
    </form>
  );
}
