import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, updateTodo } from "../redux/todo/actions";

const Todo = () => {
  const { todo } = useSelector((state) => state);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [old, setOld] = useState(null);
  const dispatch = useDispatch();

  const handleTodoCreate = () => {
    dispatch(createTodo(input));
  };

  const handleTodoDelete = (item) => {
    dispatch(deleteTodo(item));
  };

  const handleTodoEdit = (item) => {
    setInput(item);
    setOld(item);
    setEdit(true);
  };

  const handleTodoUpdate = () => {
    dispatch(updateTodo({ old: old, new: input }));
    setInput("");
    setEdit(false);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {edit ? (
        <button onClick={handleTodoUpdate}>Edit</button>
      ) : (
        <button onClick={handleTodoCreate}>Add</button>
      )}

      <hr />
      <ul>
        {todo.length > 0
          ? todo.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => handleTodoDelete(item)}>x</button>
                  <button onClick={() => handleTodoEdit(item)}>E</button>
                </li>
              );
            })
          : "No data found"}
      </ul>
    </>
  );
};

export default Todo;
