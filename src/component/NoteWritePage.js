import React, { useState } from "react";
import { Form, Button, Input } from "antd";
const { TextArea } = Input;
export default function NoteWritePage() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>필기작성</h2>
      </div>
      <Form>
        <br />
        <br />
        <label>title</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <TextArea onChange={descriptionChangeHandler} value={Description} />
        <br />
        <br />
        <Button type="submit"> 저장 </Button>
      </Form>
    </div>
  );
}
