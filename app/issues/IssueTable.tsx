import { Table } from "@radix-ui/themes";
import NextLink from "next/link";
import Link from "@/components/Link";
import { IoIosArrowUp } from "react-icons/io";
import StatusBadge from "@/components/StatusBadge";
import { Issue, Status } from "@prisma/client";

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  page: string;
}

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
    <>
      <Table.Root variant="surface" className="mb-5">
        <Table.Header>
          <Table.Row>
            {columns.map((col) => (
              <Table.ColumnHeaderCell key={col.value} className={col.className}>
                <NextLink
                  href={{ query: { ...searchParams, orderBy: col.value } }}
                >
                  {col.label}
                </NextLink>
                {col.value === searchParams.orderBy && (
                  <IoIosArrowUp className="inline" />
                )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell className="flex-row">
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <StatusBadge status={issue.status} />
                </div>
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

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  {
    label: "Issue",
    value: "title",
  },
  {
    label: "Status",
    value: "status",
    className: "hidden md:table-cell",
  },
  {
    label: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];

export const columnNames = columns.map((col) => col.value);

export default IssueTable;
