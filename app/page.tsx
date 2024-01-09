import { Flex, Grid } from "@radix-ui/themes";
import IssueSummary from "./IssueSummary";
import LatestIssue from "./LatestIssue";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Metadata } from "next";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="5" pb="8">
        <Flex direction="column" gap="5">
          <IssueSummary closed={closed} inProgress={inProgress} open={open} />
          <IssueChart closed={closed} inProgress={inProgress} open={open} />
        </Flex>
        <LatestIssue />
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: "Nextracker - Dashboard",
  description: "Homepage of Nextracker",
};
