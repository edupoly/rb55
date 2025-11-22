import React, { useEffect } from "react";

function Todo({ t, i, deleteTodo }) {
  useEffect(() => {
    console.log(`${t} rendered`);
  });
  return (
    <div className="border m-2">
      <li className="d-flex gap-4 bg-success-subtle p-2">
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

export default React.memo(Todo);
// React.memo()
