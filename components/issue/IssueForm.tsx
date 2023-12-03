"use client";

import { Button, Text, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/zodSchema/createIssueSchema";
import { z } from "zod";
import Error from "../Error";
import Spinner from "../Spinner";
import { useState } from "react";
import { Issue } from "@prisma/client";
import SimpleMde from "react-simplemde-editor";

// const SimpleMde = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
  // loading: () => (
  //   <div className="flex justify-center items-center">
  //     <BsFillBugFill size={80} className="animate-pulse my-20 mx-8" />
  //     <Text size={"5"}>loading markdown editor</Text>
  //   </div>
  // ),
// });

type FormShape = z.infer<typeof issueSchema>;

interface Props {
  issue?: Issue;
}

// todo Change name
const IssueForm = ({ issue }: Props) => {
  const [submit, setSubmit] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormShape>({
    resolver: zodResolver(issueSchema),
  });
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          setSubmit(true);
          {
            issue?.id
              ? await axios.patch(`/api/issues/${issue.id}`, data)
              : await axios.post("/api/issues", data);
          }
          {
            issue?.id
              ? toast.success("Issue updated successfully")
              : toast.success("Issue created successfully");
          }
          setSubmit(false);
          router.push("/issues");
          router.refresh();
        } catch (error) {
          setSubmit(false);
          console.log(error);
          toast.error("Error creating issue");
        } finally {
          setSubmit(false);
        }
      })}
      className="max-w-xl space-y-2 w-full"
    >
      <TextField.Root>
        <TextField.Input
          defaultValue={issue?.title}
          placeholder="Enter title"
          {...register("title")}
        />
      </TextField.Root>
      <Error />
      <Error>{errors?.title?.message}</Error>
      <Controller
        name="description"
        render={({ field }) => (
          <SimpleMde placeholder="Enter description" {...field} />
        )}
        defaultValue={issue?.description}
        control={control}
      />
      <Error>{errors?.description?.message}</Error>
      <Button disabled={submit}>
        {" "}
        {issue?.id ? "Update" : "Create"} Issue {submit && <Spinner />}
      </Button>
    </form>
  );
};

export default IssueForm;