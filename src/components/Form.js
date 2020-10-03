import React, { useState, useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import FirebaseContext from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show(" The task was created", "success");
        })
        .catch(alert.show(" There was some error", "danger"));
      setValue("");
    } else {
      alert.show(" The name of the task must not be empty");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="What should you do?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
