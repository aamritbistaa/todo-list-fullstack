import { useState } from "react";
import React from "react";
import "../../App.css";

const Input = ({ todoActivity }) => {
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
    // console.log("The input value is ", value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    todoActivity({
      id: Math.floor(Math.random() * 1000),
      text: value,
      complete: false,
    });
    setValue("");
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmission}>
        <input
          placeholder="Add an activity"
          value={value}
          onChange={(e) => handleInput(e)}
        />
      </form>
    </div>
  );
};

export default Input;
