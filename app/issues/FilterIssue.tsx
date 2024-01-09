"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const FilterIssue = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const statuses: { label: string; value?: Status }[] = [
    {
      label: "All",
    },
    {
      label: "Open",
      value: "OPEN",
    },
    {
      label: "In progress",
      value: "IN_PROGRESS",
    },
    {
      label: "Closed",
      value: "CLOSED",
    },
  ];
  return (
    <Select.Root
      defaultValue={searchParams.get("status") || ""}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);

        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);

        const queryParam = params.size ? "?" + params.toString() : "";
        if (status === " ") router.push(`/issues`);
        else router.push(`/issues${queryParam}`);
      }}
    >
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            value={status.label === "All" ? " " : status.value!}
            key={status.label === "All" ? "key" : status.value}
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default FilterIssue;
