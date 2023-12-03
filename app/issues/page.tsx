// export const dynamic = "force-dynamic";
import StatusBadge from "@/components/StatusBadge";
import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import Link from "next/link";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <>
      <h1 className="text-center text-2xl font-semibold">IssuePage</h1>
      <IssueActions />
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
                <Link href={`/issues/${issue.id}`}>
                  {issue.title}
                  <div className="block md:hidden">
                    <StatusBadge status={issue.status} />
                  </div>
                </Link>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <StatusBadge status={issue.status} />
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
