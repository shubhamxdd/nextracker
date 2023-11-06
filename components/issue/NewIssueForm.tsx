"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";

interface FormShape {
  title: string;
  description: string;
}

const NewIssueForm = () => {
  const { register, control, handleSubmit } = useForm<FormShape>();
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="max-w-xl space-y-4"
    >
      <TextField.Root>
        <TextField.Input placeholder="Enter title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        render={({ field }) => (
          <SimpleMde placeholder="Enter description" {...field} />
        )}
        control={control}
      />
      <Button>Create Issue</Button>
    </form>
  );
};

export default NewIssueForm;
