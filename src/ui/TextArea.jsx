import React from "react";

function TextArea({ label, elId, state, setState, height = "100px" }) {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder={label}
        id={elId}
        style={{ height: height }}
        onChange={(e) => setState(e.target.value)}
        value={state}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
}

export default TextArea;
