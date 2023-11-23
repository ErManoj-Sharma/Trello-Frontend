import React from "react";
function List({ listName, listNotes }) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        maxWidth: "300px",
        maxHeight: "530px",
        overflowY: "auto",
        overflowX: "hidden",
        marginLeft: "10px",
        flexShrink: 0,
        marginRight: "10px",
      }}
    >
      <div class="card-body" style={{ flexWrap: "wrap" }}>
        <h5 class="card-title">{listName}</h5>
        <div>Content 1</div>

      </div>
    </div>
  );
}

export default List;
