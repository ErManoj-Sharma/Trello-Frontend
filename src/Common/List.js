import React from "react";
import Card from "./Card";
import AddCard from "./AddCard";
function List({ listName, listNotes }) {
  return (
    <div
      style={{
        height: "auto",
        display: "inline-block",
        verticalAlign: "top",
        border: "1px solid black",
        width: "300px",
        maxWidth: "300px",
        maxHeight: "530px",
        overflowY: "auto",
        overflowX: "hidden",
        marginLeft: "10px",
        flexShrink: 0,
        padding: "5px",
        backgroundColor: "#101205",
        color: "#949fa6",
        // FireFox
        scrollbarWidth: 0,
        scrollbarColor: "transparent transparent",
        borderRadius: "5px",
      }}
    >
      {/* TODO: Fix Scroll Color Issue */}
      <style>
        {`
      /* WebKit */
      ::-webkit-scrollbar {
        width:0;
        background: #777;      }

    `}
      </style>
      <div className="card-body" style={{ flexWrap: "wrap" }}>
        <h5 className="card-title">{listName}</h5>
        {listNotes.map((list, index) => (
          <Card
            noteName={list.noteName}
            priority={list.priority}
            noteText={list.noteText}
            key={index}
            id={index}
          />
        ))}
        <AddCard />
      </div>
    </div>
  );
}

export default List;
