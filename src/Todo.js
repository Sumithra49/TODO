import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./actions";

function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item">
          <p>{title}</p>
          <div className="actions">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Del
            </button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;