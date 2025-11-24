import React, { useEffect, useRef } from "react";
import Another from "./Another";

function Textbox() {
  var x = useRef();
  var y = useRef();
  var z = useRef();
  useEffect(() => {
    x.current.focus();
  }, []);
  function checkEnter(ev) {
    if (ev.key === "Enter") {
      y.current.focus();
    }
  }
  function checkEnter2(ev) {
    if (ev.key === "Enter") {
      z.current.focus();
    }
  }
  return (
    <div className="border border-5 p-2 m-2">
      <input
        type="text"
        ref={x}
        onKeyUp={(e) => {
          checkEnter(e);
        }}
      />
      <br />
      <input
        type="text"
        ref={y}
        onKeyUp={(e) => {
          checkEnter2(e);
        }}
      />
      <br />
      <Another a={10} ref={z}></Another>
    </div>
  );
}

export default Textbox;
