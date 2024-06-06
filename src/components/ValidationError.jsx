import React, { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${msg}`;
    });
  }, [error]);

  console.log(error !== null && errorMessage());

  return (
    error !== null &&
    errorMessage()?.map((item, idx) => (
      <div className="alert alert-danger p-2 text-start" role="alert" key={idx}>
        {item}
      </div>
    ))
  );
}

export default ValidationError;
