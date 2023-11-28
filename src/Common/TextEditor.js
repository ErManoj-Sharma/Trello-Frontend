import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor(props) {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const editorRef = useRef(null);
  console.log("Value: ",value)
  console.log("Text: ",text)

  return (
    <>
    <h6> Description: </h6>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='My Self Description'
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent({format:'text'}))
        }}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount advcode",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | casechange | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
