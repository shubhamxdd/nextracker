import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/zodSchema/createIssueSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const valid = createIssueSchema.safeParse(body);
  const { title, description } = body;

  if (!valid.success)
    return NextResponse.json(valid.error.format(), { status: 400 });

  const issue = await prisma.issue.create({
    data: { title, description },
  });

  return NextResponse.json(issue, { status: 201 });
}
