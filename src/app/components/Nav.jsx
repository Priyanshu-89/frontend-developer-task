import Link from "next/link";

export default function Navbar({ user }) {
  return (
    <nav className=" text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">Dashboard</h1>

      <div className="flex gap-4 items-center">
        <span>{user?.name}</span>
        <Link href="/api/auth/signout" className="text-red-400">
          Sign Out
        </Link>
      </div>
    </nav>
  );
}
