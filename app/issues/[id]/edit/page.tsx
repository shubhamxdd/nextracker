// import IssueForm from "@/components/issue/IssueForm";
import IssueFormSkeleton from "@/components/IssueFormSkeleton";
import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

interface EditIssuePageProps {
  params: { id: string };
}

const IssueForm = dynamic(() => import("@/components/issue/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

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
      <IssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
