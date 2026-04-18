import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Manage your tasks with TaskFlow</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        A simple SaaS app to organize daily work, track progress, and upgrade to premium.
      </p>

      <div className="flex justify-center gap-4">
        <Link href="/dashboard" className="bg-slate-900 text-white px-6 py-3 rounded-xl">
          Go to Dashboard
        </Link>
        <Link href="/pricing" className="border border-slate-300 px-6 py-3 rounded-xl">
          View Pricing
        </Link>
      </div>
    </section>
  );
}
