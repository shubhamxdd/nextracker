import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface StatusBadgeProps {
  status: Status;
  summary?: boolean;
}

const statusMap: Record<
  Status,
  { label: string; color: "blue" | "yellow" | "green" }
> = {
  OPEN: { label: "Open", color: "blue" },
  IN_PROGRESS: { label: "In Progress", color: "yellow" },
  CLOSED: { label: "Closed", color: "green" },
};

const StatusBadge = ({ status, summary }: StatusBadgeProps) => {
  return (
    <Badge color={statusMap[status].color} size={summary ? "2" : "1"}>
      {statusMap[status].label} {summary && "Issues"}
    </Badge>
  );
};

export default StatusBadge;
