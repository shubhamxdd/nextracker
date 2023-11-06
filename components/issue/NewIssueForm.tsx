"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
          .then(() => {
            toast.success("Issue created successfully");
            router.push("/issues");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error creating issue");
          });
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
