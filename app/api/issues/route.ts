import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/zodSchema/createIssueSchema";
import { getServerSession } from "next-auth";
import authOption from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOption);

  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const valid = issueSchema.safeParse(body);
  const { title, description } = body;

  if (!valid.success)
    return NextResponse.json(valid.error.format(), { status: 400 });

  const issue = await prisma.issue.create({
    data: { title, description },
  });

  return NextResponse.json(issue, { status: 201 });
}
