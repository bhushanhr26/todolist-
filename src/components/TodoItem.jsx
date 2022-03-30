import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
export default function TodoItem({ todo, onEditClick, onDeleteClick }) {
  return (
    <>
    <li key={todo.id}>
      {todo.text}
      <div onClick={() => onEditClick(todo)}><EditIcon color="success"/></div>
      <div onClick={() => onDeleteClick(todo.id)}><DeleteIcon color="success"/></div>
    </li>
    
    </>
  );
}
