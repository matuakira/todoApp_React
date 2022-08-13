import React from "react";

export const InputTodo = (props) => {
  // 入力値とイベント関数をpropsで受け取る。
  const { todoText, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
