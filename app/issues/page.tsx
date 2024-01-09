export const dynamic = "force-dynamic";
import prisma from "@/prisma/client";
import IssueActions from "./IssueActions";
import { Status } from "@prisma/client";
import Pagination from "@/components/Pagination";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;

  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const totalIssues = await prisma.issue.count({ where });

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">Issue Page</h1>
      <IssueActions />

      <IssueTable issues={issues} searchParams={searchParams} />

      <Pagination
        currentPage={page}
        itemCount={totalIssues}
        pageSize={pageSize}
      />
    </>
  );
};

export default IssuePage;
