import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";

interface EditIssueBtnProps {
  id: string;
}

const EditIssueBtn = ({ id }: EditIssueBtnProps) => {
  return (
    <Button>
      <HiPencilAlt />
      <Link href={`/issues/${id}/edit`}>Edit issue</Link>
    </Button>
  );
};

export default EditIssueBtn;
