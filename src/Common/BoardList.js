import React from "react";

export default function BoardList({ boardName, url, key }) {
  return (
    <>
      <li key={key}>
        <a
          href={url}
          class="link-body-emphasis d-inline-flex text-decoration-none rounded"
        >
          {boardName}
        </a>
      </li>
    </>
  );
}
