import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/zodSchema/createIssueSchema";
import { getServerSession } from "next-auth";
import authOption from "@/app/auth/authOptions";

export async function PATCH(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const session = await getServerSession(authOption);

  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

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

export async function DELETE(
  request: NextRequest,
  params: { params: { id: string } }
) {
  const session = await getServerSession(authOption);
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const issue = await prisma.issue.findUnique({
    where: {
      id: params.params.id,
    },
  });
  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  await prisma.issue.delete({
    where: {
      id: params.params.id,
    },
  });

  return NextResponse.json({ message: "Issue deleted" }, { status: 200 });
}
