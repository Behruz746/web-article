import React from "react";

function Input({ label, elId, type = "text", state, setState }) {
  return (
    <div className="form-floating mb-1">
      <input
        type={type}
        className="form-control"
        id={elId}
        placeholder={label}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
