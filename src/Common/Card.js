import React, { useState } from "react";
import { Edit } from "../Assets/Images";
import { EditCardModal } from "./EditCardModal";
function Card({ noteName, priority, noteText, id }) {
  const [modalShow, setModalShow] = useState(false);

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
          backgroundColor: "#22272b",
          color: "#a9b5c0",
        }}
      >
        <div className="card-body" id={id} style={{ position: "relative" }}>
          <a
            onClick={() => setModalShow(true)}
            style={{
              position: "absolute",
              top: 0,
              right: 2,
              cursor: "pointer",
            }}
          >
            <img src={Edit} />
          </a>
          <h6 className="card-subtitle mb-2 " style={{ color: "#a9b5c0" }}>
            {noteName}
          </h6>
          {/* <p className="card-text">{noteText}</p>
          <p href="#" className="card-link">
            {priority}
          </p> */}
        </div>
      </div>
      <EditCardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        heading={noteName}
      />
    </div>
  );
}

export default Card;
