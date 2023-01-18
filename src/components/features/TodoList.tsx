import TodoItem from "./TodoItem";
import "../../styles/TodoList.css";

interface Todolist {
  todo: any;
  onToggle(id: number): void;
  onDel(id: number): void;
  check: boolean;
}

interface Item {
  id: number;
  title: string;
  text: string;
  check: boolean;
}

interface TItem {
  item: Item;
  onToggle(id: number): void;
  onDel(id: number): void;
}

interface TList extends TItem {
  id: number;
  title: string;
  text: string;
  check: boolean;
}

const TodoList = ({ todo, onToggle, onDel, check }: Todolist) => {
  return (
    <div className="TodoList">
      <h2>{check ? "완료" : "진행 중"}</h2>
      {todo.map(
        (item: TList) =>
          item.check === check && (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDel={onDel}
            />
          )
      )}
    </div>
  );
};

export default TodoList;
