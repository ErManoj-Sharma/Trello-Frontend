import React from "react";

function Card({ noteName, priority, noteText }) {
  debugger;
  return (
    <div
      style={{
        marginLeft: "5px",
        marginTop: "5px",
        backgroundColor: "#22272b",
        borderRadius: "5px",
      }}
    >
      <div
        className="card"
        style={{
          width: "17.5rem",
          backgroundColor: "#22272b",
          color: "#a9b5c0",
        }}
      >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 " style={{ color: "#a9b5c0" }}>
            {noteName}
          </h6>
          <p className="card-text">{noteText}</p>
          <p href="#" className="card-link">
            {priority}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
