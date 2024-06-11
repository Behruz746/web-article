import React from "react";
import { Input, TextArea } from "../ui";

function CreateForm({
  title,
  setTitle,
  description,
  setDescription,
  body,
  setBody,
}) {
  return (
    <div className="w-75 mx-auto">
      <form action="#">
        <Input
          label={"Title"}
          elId={"input-title"}
          state={title}
          setState={setTitle}
        />
        <TextArea
          label={"Description"}
          elId={"input-description"}
          state={description}
          setState={setDescription}
        />
        <TextArea
          label={"Body"}
          elId={"textarea-body"}
          state={body}
          setState={setBody}
          height={"300px"}
        />
        <button type="submit" className="btn btn-primary w-100 py-2 mt-2">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
