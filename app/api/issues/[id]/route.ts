import { createIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export const PATCH = async (request: NextRequest, { params }: Props) => {
  const body: Issue = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: Number(params.id) },
  });

  if (!issue)
    return NextResponse.json({ error: "Invalid issue!" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: Number(params.id) },
    data: {
      description: body.description,
      title: body.title,
    },
  });

  return NextResponse.json(updatedIssue);
};
