import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/zodSchema/createIssueSchema";

export async function PATCH(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const body = await request.json();
  const valid = issueSchema.safeParse(body);
  if (!valid.success)
    return NextResponse.json(valid.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: {
      id: params.params.id,
    },
  });

  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: params.params.id },
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(updatedIssue, {
    status: 200,
  });
}
