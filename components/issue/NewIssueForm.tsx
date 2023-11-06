"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssueForm = () => {
  return (
    <>
      <TextField.Root>
        <TextField.Input placeholder="Enter title" />
      </TextField.Root>
      <SimpleMde placeholder="Enter description" className="" />
      <Button>Create Issue</Button>
    </>
  );
};

export default NewIssueForm;
