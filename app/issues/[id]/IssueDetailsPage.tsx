import StatusBadge from "@/components/StatusBadge";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

interface IssueDetailsPageProps {
  issue: Issue;
}

const IssueDetailsPage = ({ issue }: IssueDetailsPageProps) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex gap={"3"} my={"2"}>
        <StatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt={"4"}>
        <ReactMarkdown>{issue?.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetailsPage;
