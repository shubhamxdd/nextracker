import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface StatusBadgeProps {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "blue" | "yellow" | "green" }
> = {
  OPEN: { label: "Open", color: "blue" },
  IN_PROGRESS: { label: "In Progress", color: "yellow" },
  CLOSED: { label: "Closed", color: "green" },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default StatusBadge;
