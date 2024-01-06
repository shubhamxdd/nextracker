"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const onClick = async () => {
    try {
      setDeleting(true);
      await axios.delete(`/api/issues/${id}`);
      router.push("/issues");
      router.refresh();
      toast.success("Issue deleted successfully.");
      setDeleting(false);
    } catch (error) {
      setDeleting(false);
      toast.error("Something went wrong.");
    } finally {
      setDeleting(false);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <button
            className="bg-red-500 px-4 py-1 text-white rounded-md"
            disabled={deleting}
          >
            Delete Issue{"   "}
            {deleting && <Spinner />}
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This will permanently delete the issue.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <button
                className="bg-red-500 px-4 py-1 text-white rounded-md"
                onClick={onClick}
                disabled={deleting}
              >
                Yes! Delete Issue{"   "}
                {deleting && <Spinner />}
              </button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteButton;
