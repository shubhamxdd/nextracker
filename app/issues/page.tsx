import prisma from "@/prisma/client";
import { Badge, Button, Table } from "@radix-ui/themes";
import Link from "next/link";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <>
      <h1 className="text-center text-2xl font-semibold">IssuePage</h1>
      <div className="my-4">
        <Button>
          <Link href="/issues/new">Create New issue</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell className="flex gap-2">
                {issue.title}
                <div className="block md:hidden">
                  <Badge>{issue.status}</Badge>
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Badge>{issue.status}</Badge>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuePage;
