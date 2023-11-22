import React from "react";
function List({ listName, listNotes }) {
  return (
    <div
      class="card"
      // style={{
      //   width: "400px",
      //   height: "auto",
      //   overflowX: "hidden",
      //   border: "1px solid #ccc",
      // }}
    >
      <div class="card-body">
        <h5 class="card-title">{listName}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <div class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
      </div>
    </div>
  );
}

export default List;
