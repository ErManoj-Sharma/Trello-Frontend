import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function AddCard() {
  const [cardContent, setCardContent] = useState("");
  const [popoverFlag, setPopoverFlag] = useState(false);
  const handleOnClick = (event) => {
    setPopoverFlag(true);
  };
  const handleAddCard = (event) => {
    event.preventDefault();
    console.log(cardContent)
    //TODO:  Logic to add tasks in database 
    setPopoverFlag(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setPopoverFlag(false);
  };
  return (
    <div style={{ marginTop: "5px", marginLeft: "5px", width: "100%", zIndex:'20' }}>
      {" "}
      {popoverFlag ? (
        <div>
          <InputGroup>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="Add a Card"
              style={{ marginRight: "6px"}}
              onChange={(e)=>{
                setCardContent(e.target.value)
              }}
            />
          </InputGroup>
          <div style={{ marginTop: "5px" }}>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddCard}
              style={{ width: "45%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Add a Card
            </Button>
            <Button
              variant="dark"
              size="sm"
              onClick={handleCancel}
              style={{ width: "48%", marginLeft: "10px" }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button
          variant="dark"
          size="sm"
          onClick={handleOnClick}
          style={{ width: "98%" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          Add a Card
        </Button>
      )}
    </div>
  );
}

export default AddCard;
