"use client";

import { Button, Text, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/zodSchema/createIssueSchema";
import { z } from "zod";
import { BsFillBugFill } from "react-icons/bs";
import Error from "../Error";
// import SimpleMde from "react-simplemde-editor";

const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center">
      <BsFillBugFill size={80} className="animate-pulse my-20 mx-8" />
      <Text size={"5"}>loading markdown editor</Text>
    </div>
  ),
});

type FormShape = z.infer<typeof createIssueSchema>;

const NewIssueForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormShape>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          toast.success("Issue created successfully");
          router.push("/issues");
        } catch (error) {
          console.log(error);

          toast.error("Error creating issue");
        }
      })}
      className="max-w-xl space-y-2"
    >
      <TextField.Root>
        <TextField.Input placeholder="Enter title" {...register("title")} />
      </TextField.Root>
      <Error />
      <Error>{errors?.title?.message}</Error>
      <Controller
        name="description"
        render={({ field }) => (
          <SimpleMde placeholder="Enter description" {...field} />
        )}
        control={control}
      />
      <Error>{errors?.description?.message}</Error>
      <Button>Create Issue</Button>
    </form>
  );
};

export default NewIssueForm;
