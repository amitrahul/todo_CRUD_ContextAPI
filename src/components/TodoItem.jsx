import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const handleEditTodo = () => {
    /* 
      here updateTodo is taking id and todo object in input.
      for passing the object, firstly we destructure the all todo
      in the object, and from there we can just update the todo 
      key with new todomsg. so we can able to edit the one property
      from the object itself.
    */
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(!isTodoEditable);
  };

  const handleToggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const handleEditOrSaveBtn = () => {
    if (todo.completed) return;
    isTodoEditable ? handleEditTodo() : setIsTodoEditable((prev) => !prev);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3
    py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black
     ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
    `}
    >
      {/* for checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={handleToggleCompleted}
      />
      {/* for text area */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* for edit & save btn */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={handleEditOrSaveBtn}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📒" : "🖌️"}
      </button>
      {/* delete todo item */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ␡
      </button>
    </div>
  );
};
export default TodoItem;
