export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <a href="/" className="text-sm font-medium text-emerald-700">
          ← Back to home
        </a>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Support</h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-zinc-700">
          <p>
            Need help with NatureLogs? Reach out and we’ll do our best to help.
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:support@naturelogs.com"
              className="font-medium text-emerald-700"
            >
              support@naturelogs.com
            </a>
          </p>

          <p>
            For account, app, or subscription issues, include as much detail as possible
            so we can help faster.
          </p>
        </div>
      </div>
    </main>
  );
}