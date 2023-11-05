import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const valid = createIssueSchema.safeParse(body);
  const { title, description } = body;

  if (!valid.success)
    return NextResponse.json(valid.error.errors, { status: 400 });

  const issue = await prisma.issue.create({
    data: { title, description },
  });

  return NextResponse.json(issue, { status: 201 });
}
