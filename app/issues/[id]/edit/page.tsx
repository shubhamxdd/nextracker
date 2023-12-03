import NewIssueForm from "@/components/issue/NewIssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface EditIssuePageProps {
  params: { id: string };
}

const EditIssuePage = async ({ params: { id } }: EditIssuePageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id,
    },
  });

  if (!issue) return notFound();

  return (
    <div className="flex-col flex items-center">
      <h1 className="text-2xl my-4">Update Issue</h1>
      <NewIssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
