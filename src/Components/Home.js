import React, { useState } from "react";
import List from "../Common/List";
function Home() {
  const [list, setList] = useState([
    {
      listName: "TODO",
      listNotes: [
        { noteName: "Task1", priority: "1", noteText: "abcd1" },
        { noteName: "Task2", priority: "2", noteText: "abcd2" },
        { noteName: "Task3", priority: "3", noteText: "abcd3" },
      ],
    },
    {
      listName: "Pending",
      listNotes: [
        { noteName: "Task1", priority: "1", noteText: "abcd1" },
        { noteName: "Task2", priority: "2", noteText: "abcd2" },
        { noteName: "Task3", priority: "3", noteText: "abcd3" },
      ],
    },
    {
      listName: "Completed",
      listNotes: [
        { noteName: "Task1", priority: "1", noteText: "abcd1" },
        { noteName: "Task2", priority: "2", noteText: "abcd2" },
        { noteName: "Task3", priority: "3", noteText: "abcd3" },
      ],
    },
    {
      listName: "Urgent",
      listNotes: [
        { noteName: "Task1", priority: "1", noteText: "abcd1" },
        { noteName: "Task2", priority: "2", noteText: "abcd2" },
        { noteName: "Task3", priority: "3", noteText: "abcd3" },
      ],
    },
    {
      listName: "No Work",
      listNotes: [
        { noteName: "Task1", priority: "1", noteText: "abcd1" },
        { noteName: "Task2", priority: "2", noteText: "abcd2" },
        { noteName: "Task3", priority: "3", noteText: "abcd3" },
      ],
    },
      ]);
  return (
      <div style={{ display:"flex", whiteSpace: 'nowrap'}}>
        {list.map((list) => (
          <List listName={list.listName} listNotes={list.listNotes} />
        ))}
      </div>
  );
}

export default Home;
