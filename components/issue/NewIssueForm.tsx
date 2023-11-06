"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssueForm = () => {
  return (
    <>
      <TextField.Root>
        <TextField.Input placeholder="Enter title" />
      </TextField.Root>
      <TextArea placeholder="Enter description" className="" />
      <Button>Create Issue</Button>
    </>
  );
};

export default NewIssueForm;
