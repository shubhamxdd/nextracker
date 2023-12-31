import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required").max(50, "Title is too long"),
  description: z.string().min(1, "Description is required"),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title is too long")
    .optional(),
  description: z.string().min(1, "Description is required").optional(),
  assignedToUserId: z.string().min(1, "id is required").optional().nullable(),
});
