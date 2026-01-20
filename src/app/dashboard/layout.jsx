import { auth } from "../auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Nav";


export default async function DashboardLayout({ children }) {
  const session = await auth();

  if (!session) redirect("/api/auth/signin");

  return (
    <>
      <Navbar user={session.user} />
      <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
    </>
  );
}
