import React from "react";

function CityInput({ name, placeholder }) {
  const id = "input" + name;
  return (
    <>
      <label for={id}>{name}</label>
      <input
        type="text"
        class="form-control"
        placeholder={placeholder}
        id={id}
      ></input>
    </>
  );
}

export default CityInput;
