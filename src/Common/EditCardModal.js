import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextEditor from "./TextEditor";
import { useState } from "react";
export function EditCardModal(props) {
  const [description , setDescription] = useState('')
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextEditor setDescription={setDescription}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
