import StatusBadge from "@/components/StatusBadge";
import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ closed, inProgress, open }: Props) => {
  const statuses: { label: string; value: number; status: Status }[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
    },
    {
      label: "In Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
    },
    {
      label: "Closed Issues",
      value: closed,
      status: "CLOSED",
    },
  ];
  return (
    <Flex gap="3">
      {statuses.map((status) => (
        <Card key={status.label}>
          <Flex direction={"column"}>
            <Link
              className="text-xl font-semibold cursor-pointer"
              href={`/issues?status=${status.status}`}
            >
              {status.label}
              {/* <StatusBadge summary status={status.status} /> */}
            </Link>
            <Text size="5" my="1">
              {status.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
