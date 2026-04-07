export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <a href="/" className="text-sm font-medium text-emerald-700">
          ← Back to home
        </a>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Privacy Policy</h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-zinc-700">
          <p>
            NatureLogs is a field logging and life-listing app for wildlife observations.
          </p>

          <p>
            We collect the information needed to provide core app functionality, such as
            account details, observation records, photos, and related app data you choose
            to store.
          </p>

          <p>
            Location information may be used to support observation logging, mapping, and
            trip features. Privacy controls within the app may allow you to limit how
            location information is shared.
          </p>

          <p>
            We do not sell your personal information.
          </p>

          <p>
            If you have questions about privacy or data handling, contact us through the
            support page.
          </p>

          <p className="text-sm text-zinc-500">Last updated: April 7, 2026</p>
        </div>
      </div>
    </main>
  );
}