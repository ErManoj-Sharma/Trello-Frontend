import React, { useEffect, useState } from "react";
import "./../Assets/Styles/SideBar.css";
import BoardList from "../Common/BoardList";
function SideBar() {
  // use SetBoardList to fetch BoardList of User and Display
  const [boardList, setBoardList] = useState([
    { boardName: "Board 1", url: "#" },
    { boardName: "Board 2", url: "#" },
  ]);
  return (
    <div>
      {" "}
      <div class="flex-shrink-0 p-3" style={{ width: "280px;" }}>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button
              class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Your Boards
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {boardList.map((board, index) => (
                  <BoardList
                    boardName={board.boardName}
                    url={board.url}
                    key={index}
                  />
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
