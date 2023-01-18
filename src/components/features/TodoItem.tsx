import React from "react";

interface TItem {
  item: Item;
  onToggle(id: number): void;
  onDel(id: number): void;
}

interface Item {
  id: number;
  title: string;
  text: string;
  check: boolean;
}

const TodoItem = ({ item, onToggle, onDel }: TItem) => {
  const { id, title, text, check }: Item = item;

  return (
    <li>
      <div className="todoBox">
        <div>
          <h3 className="title">{title}</h3>
          <p>{text}</p>
        </div>
        <button className="done" onClick={() => onToggle(id)}>
          {check ? <>취소</> : <>완료</>}
        </button>
        <button className="delBtn" onClick={() => onDel(id)}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
