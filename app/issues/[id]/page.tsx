import prisma from "@/prisma/client";
import delay from "delay";
import { notFound } from "next/navigation";

interface IssuePageProps {
  params: { id: string };
}

const IssuePage = async ({ params }: IssuePageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  delay(1000)
  if (!issue) notFound();
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssuePage;
