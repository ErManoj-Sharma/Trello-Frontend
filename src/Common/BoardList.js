import React from "react";

export default function BoardList({ boardName, url }) {
  return (
    <>
      <li>
        <a
          href={url}
          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
        >
          {boardName}
        </a>
      </li>
    </>
  );
}
