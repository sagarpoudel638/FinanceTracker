import React from "react";

export default function Input({inputlabel}) {
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Total Money In bank
          "
        />
        <label htmlFor="floatingInput">{inputlabel}</label>
      </div>
      
    </>
  );
}
