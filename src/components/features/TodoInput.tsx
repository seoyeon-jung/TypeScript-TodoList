import React, { useState } from "react";
import "../../styles/TodoInput.css";
interface addHandler {
  onAdd(title: string, text: string): void;
}

const TodoInput = ({ onAdd }: addHandler) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const changeTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const changeTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !text) {
      alert("제목과 내용 모두 입력하세요!");
      return;
    }

    onAdd(title, text);
    setTitle("");
    setText("");
  };

  return (
    <form className="TodoInput">
      <input
        className="inputText"
        type="text"
        value={title}
        onChange={changeTitleInput}
        placeholder="제목"
      />
      <input
        className="inputText"
        type="text"
        value={text}
        onChange={changeTextInput}
        placeholder="내용"
      />
      <button className="submitBtn" type="submit" onClick={onSubmit}>
        추가하기
      </button>
    </form>
  );
};

export default TodoInput;
