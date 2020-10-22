import React from "react";
import { InputText } from "primereact/inputtext";

function InputData({ onChange, value, Label }) {
  return (
    <span className="p-float-label p-field">
      <InputText
        id="in"
        className="p-invalid p-d-block"
        value={value}
        onChange={(e) => {
          onChange();
        }}
      />
      <label htmlFor="in">{Label}</label>
      <small id="in2-help" className="p-invalid p-d-block">
        Username is not available.
      </small>
    </span>
  );
}

export default InputData;
