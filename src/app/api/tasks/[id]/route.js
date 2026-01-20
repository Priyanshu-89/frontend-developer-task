
import { auth } from "@/app/auth";
import { DbConnect } from "@/app/db/DbConnect";
import task from "@/app/model/task";

export async function PUT(req, { params }) {
  await DbConnect();
  const session = await auth();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
const { id } = params;
  const { title, completed } = await req.json();

  const updatedTask = await task.findOneAndUpdate(
    { _id: id, userId: session.user.id },
    { title, completed },
    { new: true }
  );

  return Response.json(updatedTask);
}

export async function DELETE(req, { params }) {
  await DbConnect();
  const session = await auth();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
    const { id } = params;

  await task.findOneAndDelete({
    _id:id,
    userId: session.user.id,
  });

  return Response.json({ success: true });
}
