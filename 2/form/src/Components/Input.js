import React from "react";

export default function Input(props) {
  return (
    <>
      <input
        className="formInputs"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.text}
        onChange={props.onChange}
      />
    </>
  );
}
