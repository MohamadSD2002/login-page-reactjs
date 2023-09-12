import React from "react";

export default function InputForm({ type, value, onChange, label }) {
  return (
    <>
      <input
        type={type}
        value={value}
        className="input-field"
        onChange={onChange}
        onFocus={(e) => {
          e.preventDefault();
          e.target.classList.add("action");
        }}
        onBlur={(e) => {
          if (e.target.value !== "") return;
          e.target.classList.remove("action");
        }}
        minlength="4"
        autocomplete="off"
        required
      />
      <label>{label}</label>
    </>
  );
}
