import React from "react";

export default function Card() {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src="..." className="card-img-top" alt="this image to be replaced by amount" />
      <div className="card-body">
        <p className="card-text">
          You have to save this amount.
        </p>
      </div>
    </div>
  );
}
