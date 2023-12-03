import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueBtn from "./EditIssueBtn";
import IssueDetailsPage from "./IssueDetailsPage";

interface IssuePageProps {
  params: { id: string };
}

const IssuePage = async ({ params }: IssuePageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!issue) return notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <Box>
        <IssueDetailsPage issue={issue} />
      </Box>
      <Box>
        <EditIssueBtn id={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssuePage;
