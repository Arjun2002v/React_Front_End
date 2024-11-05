import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const onAdd = () => {
    setList([todo, ...list]);
    setTodo("");
  };
  const Dlt = (index) => {
    setList(list.filter((_, i) => i !== index));
  };
  return (
    <>
      <div>
        <h2>Add Your Things</h2>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button onClick={onAdd}>Add</button>

        {list.map((item, index) => {
          return (
            <>
              <li key={index}>{item}</li>
              <button onClick={() => Dlt(index)}>Dlt</button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
