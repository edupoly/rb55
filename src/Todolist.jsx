import React, { useState } from "react";

function Todolist() {
  //   var [p, setP] = useState("");
  //   var [g, setG] = useState(null);
  var [student, setStudent] = useState({
    name: "",
    gender: null,
    dob: null,
    techs: [],
  });
  function handleTechs(ev) {
    if (ev.target.checked) {
      setStudent({ ...student, techs: [...student.techs, ev.target.value] });
    } else {
      //   var temp = [...student.techs];
      //   temp = temp.filter((t) => {
      //     if (t != ev.target.value) {
      //       return true;
      //     }
      //   });
      //   console.log(temp);
      //   setStudent({ ...student, techs: [...temp] });
      setStudent((cs) => {
        cs.techs = cs.techs.filter((t) => t != ev.target.value);
        return { ...cs };
      });
    }
  }
  return (
    <div className="border border-2 border-success p-2 m-2">
      <h1>Todolist</h1>
      <b>Full Name:</b>
      <input
        type="text"
        onKeyUp={({ target: { value } }) =>
          setStudent({ ...student, name: value })
        }
      />
      <br />
      <b>Gender:</b>
      <input
        type="radio"
        name="gen"
        value="female"
        onChange={(e) => {
          setStudent({ ...student, gender: e.target.value });
        }}
      />
      :Female
      <input
        type="radio"
        name="gen"
        value="male"
        onChange={(e) => {
          setStudent({ ...student, gender: e.target.value });
        }}
      />
      :Male
      <input
        type="radio"
        name="gen"
        value="others"
        onChange={(e) => {
          setStudent({ ...student, gender: e.target.value });
        }}
      />
      :Other
      <br />
      <b>Date of Birth:</b>
      <input
        type="date"
        onChange={(e) => {
          setStudent({ ...student, dob: e.target.value });
        }}
      />
      <br />
      <input
        type="checkbox"
        name="techs"
        value="rjs"
        onChange={(e) => {
          handleTechs(e);
        }}
      />
      :ReactJS
      <input
        type="checkbox"
        name="techs"
        value="ajs"
        onChange={(e) => {
          handleTechs(e);
        }}
      />
      :Angular
      <input
        type="checkbox"
        name="techs"
        value="njs"
        onChange={(e) => {
          handleTechs(e);
        }}
      />
      :NodeJS
      <input
        type="checkbox"
        name="techs"
        value="ejs"
        onChange={(e) => {
          handleTechs(e);
        }}
      />
      :ExpressJS
      <br />
      <h2 id="d2">Full Name:{student.name}</h2>
      <h2>Gender:{student.gender}</h2>
      <h2>Date Of Birth:{student.dob}</h2>
      <h2>Technologies:{student.techs}</h2>
    </div>
  );
}

export default Todolist;
