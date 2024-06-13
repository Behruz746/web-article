import React, { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationEditeError() {
  const { editeError } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(editeError).map((name) => {
      const msg = editeError[name].join(", ");
      return `${msg}`;
    });
  }, [editeError]);

  return (
    editeError !== null &&
    errorMessage()?.map((item, idx) => (
      <div className="alert alert-danger p-2 text-start" role="alert" key={idx}>
        {item}
      </div>
    ))
  );
}

export default ValidationEditeError;
