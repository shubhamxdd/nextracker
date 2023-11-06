"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormShape {
  title: string;
  description: string;
}

const NewIssueForm = () => {
  const { register, control, handleSubmit } = useForm<FormShape>();
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios
          .post("/api/issues", data)
          .then(() => router.push("/issues"));
      })}
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
