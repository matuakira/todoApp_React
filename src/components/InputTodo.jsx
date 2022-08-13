import React from "react";

export const InputTodo = (props) => {
  // 入力値とイベント関数をpropsで受け取る。
  const { todoText, onChange, onClick, disabled } = props;

  // CSS in JS。ここで使うスタイルはここに閉じる。
  // 必ずしもこうするのがベストとは限らない。ケースバイケース。
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
