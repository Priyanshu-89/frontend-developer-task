import { auth } from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome, {session.user.name}
        </h1>

        <p className="text-gray-400 mb-6">
          Role: <span className="text-white">{session.user.role}</span>
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/api/auth/signout"
            className="text-red-400 hover:text-red-500"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}
