import StatusBadge from "@/components/StatusBadge";
import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";

const LatestIssue = async () => {
  const latestIssues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <>
      <Card>
        <Heading mt="2" ml="3" mb="5">
          Latest Issues
        </Heading>
        <Table.Root>
          <Table.Body>
            {latestIssues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Flex justify="between">
                    <Flex direction="column" align="start" gap="2">
                      <Link
                        className="hover:underline"
                        href={`/issues/${issue.id}`}
                      >
                        {issue.title}
                      </Link>
                      <StatusBadge status={issue.status} />
                    </Flex>
                    {issue.assignedToUser && (
                      <Avatar
                        src={issue.assignedToUser.image!}
                        fallback="?"
                        size="2"
                        radius="full"
                      />
                    )}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Link
          href={"/issues"}
          className="float-end mt-4 mb-2 text-sm text-blue-800"
        >
          Click here for more issues
        </Link>
      </Card>
    </>
  );
};

export default LatestIssue;
