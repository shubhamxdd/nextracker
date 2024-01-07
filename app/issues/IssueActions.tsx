import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import FilterIssue from "./FilterIssue";

const IssueActions = () => {
  return (
    <>
      <Flex my="4" justify={"between"}>
        <Button>
          <Link href="/issues/new">Create New issue</Link>
        </Button>
        <FilterIssue />
      </Flex>
    </>
  );
};

export default IssueActions;
