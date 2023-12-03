import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueActions = () => {
  return (
    <>
      <div className="my-4">
        <Button>
          <Link href="/issues/new">Create New issue</Link>
        </Button>
      </div>
    </>
  );
};

export default IssueActions;
