import React from "react";

function Card({ noteName, priority, noteText }) {
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
        <h6 class="card-subtitle mb-2 text-body-secondary">{noteName}</h6>
          <p class="card-text">
           {noteText}
          </p>
          <p href="#" class="card-link">
           {priority}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
