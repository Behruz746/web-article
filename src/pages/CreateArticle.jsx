import React, { useState } from "react";
import { Form } from "../components";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="container d-flex row align-items-center">
      <h1 className="fs-2 text-center">Create article</h1>
      <Form
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
      />
    </div>
  );
}

export default CreateArticle;
