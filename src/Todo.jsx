import React from "react";

function Todo({ t, deleteTodo, i }) {
  return (
    <div className="border p-2 m-2">
      <li>
        {t}
        <button
          onClick={() => {
            deleteTodo(i);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Todo;
