import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { patchIssueSchema } from "@/zodSchema/createIssueSchema";
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
  const { title, description, assignedToUserID } = body;
  const valid = patchIssueSchema.safeParse(body);
  if (!valid.success)
    return NextResponse.json(valid.error.format(), { status: 400 });

  if (assignedToUserID) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserID },
    });
    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: params.params.id,
    },
  });

  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: params.params.id },
    data: {
      title,
      description,
      assignedToUserID,
    },
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
