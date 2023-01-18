import React, { useState, useRef } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../../styles/Todos.css";

interface TList {
  id: number;
  title: string;
  text: string;
  check: boolean;
}

const Todos = () => {
  const no = useRef(1);
  const [todo, setTodo] = useState<TList[]>([]);

  const onDelete = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const onToggle = (id: number) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  };

  const onAdd = (title: string, text: string) => {
    setTodo((prev) => {
      return [
        ...prev,
        {
          id: no.current++,
          title,
          text,
          check: false,
        },
      ];
    });
  };

  return (
    <div className="Todos">
      <TodoInput onAdd={onAdd} />
      <TodoList
        check={false}
        todo={todo}
        onToggle={onToggle}
        onDel={onDelete}
      />
      <TodoList check={true} todo={todo} onToggle={onToggle} onDel={onDelete} />
    </div>
  );
};

export default Todos;
