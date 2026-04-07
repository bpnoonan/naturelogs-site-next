export default function HomePage() {
  const screenshots = [
    { src: "/screens/observation-detail.jpg", title: "Observation detail" },
    { src: "/screens/map-view.jpg", title: "Map view" },
    { src: "/screens/new-observation.jpg", title: "New observation" },
    { src: "/screens/privacy-generalized.jpg", title: "Privacy controls" },
    { src: "/screens/share-trip.jpg", title: "Share trips" },
    { src: "/screens/trip-detail.jpg", title: "Trip details" },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Herp - by NatureLogs
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            A clean home for your field observations.
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            NatureLogs helps you log herp observations, organize trips, and build a personal
            archive of your finds — all in one place.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white"
            >
              App Store · Coming soon
            </a>
            <a
              href="#"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900"
            >
              Google Play · Coming soon
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Log observations fast</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Capture species, photos, notes, and location in one clean flow.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Track trips and routes</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Keep field days organized with maps, trip detail, and structured records.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Control privacy</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Share records without exposing exact locations when privacy matters.
            </p>
          </div>
        </div>

        <section className="mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              App preview
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
              Built for real field use
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screen) => (
              <div
                key={screen.title}
                className="rounded-[28px] border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="overflow-hidden rounded-[22px] border border-zinc-200 bg-zinc-100">
                  <img
                    src={screen.src}
                    alt={screen.title}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-medium text-zinc-700">
                  {screen.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-zinc-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
            <div>
              <span className="font-semibold text-zinc-900">NatureLogs</span>
              <span className="ml-2">Field logging and life-listing for herpetological observations.</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="/privacy" className="hover:text-zinc-950">
                Privacy Policy
              </a>
              <a href="/support" className="hover:text-zinc-950">
                Support
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}