import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          TaskFlow
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
