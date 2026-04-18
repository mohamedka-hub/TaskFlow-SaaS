export default function PricingPage() {
  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8 border">
          <h2 className="text-2xl font-semibold mb-3">Free</h2>
          <p className="text-4xl font-bold mb-4">$0</p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>Up to 5 tasks</li>
            <li>Basic dashboard</li>
            <li>Email support</li>
          </ul>
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl">
            Current Plan
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow p-8 border border-slate-900">
          <h2 className="text-2xl font-semibold mb-3">Pro</h2>
          <p className="text-4xl font-bold mb-4">$12/mo</p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li>Unlimited tasks</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl">
            Upgrade
          </button>
        </div>
      </div>
    </section>
  );
}
