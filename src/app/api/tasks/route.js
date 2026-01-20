

import { auth } from "@/app/auth";
import { DbConnect } from "@/app/db/DbConnect";
import task from "@/app/model/task";


export async function GET() {
  await DbConnect();
  const session = await auth();

  const tasks = await task.find({ userId: session.user.id });
  return Response.json(tasks);
}

export async function POST(req) {
  await DbConnect();
  const session = await auth();

  const { title } = await req.json();
  const Task = await task.create({
    title,
    completed: false,
    userId: session.user.id,
  });

  return Response.json(Task);
}
