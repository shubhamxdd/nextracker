"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root>
        <TextField.Input placeholder="Enter title" />
      </TextField.Root>
      <TextArea placeholder="Enter description" className="" />
      <Button>Create Issue</Button>
    </div>
  );
};

export default NewIssuePage;
