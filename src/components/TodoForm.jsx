import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAddTodoItem = (e) => {
    e.preventDefault();
    /* check if todo item exist or not, if no value is there then
      return from there bcz there is not need to add the item in todos lis.
    */
    if (!todo) return;
    /*  if key and value is same in object then
      we can directly write { key} it means key and values are same.
      in other way we can write { key : "key"}
      here {todo : "todo"} so we can also write it as {todo}
    */
    addTodo({ todo, completed: false });
    /*  clear the text area */
    setTodo("");
  };
  return (
    <form className="flex" onSubmit={handleAddTodoItem}>
      <input
        type="text"
        placeholder="write todo...."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};
export default TodoForm;
