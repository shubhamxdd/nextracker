import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueBtn from "./EditIssueBtn";
import IssueDetailsPage from "./IssueDetailsPage";
import DeleteButton from "@/components/DeleteButton";
import { getServerSession } from "next-auth";
import authOption from "@/app/auth/authOptions";

interface IssuePageProps {
  params: { id: string };
}

const IssuePage = async ({ params }: IssuePageProps) => {
  const session = await getServerSession(authOption);
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!issue) return notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="3">
      <Box className="md:col-span-4">
        <IssueDetailsPage issue={issue} />
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          {session && (
            <>
              <EditIssueBtn id={issue.id} />
              <DeleteButton id={issue.id} />
            </>
          )}
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssuePage;
