export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-6 text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-6 text-gray-500 dark:text-gray-400">Last updated: April 2026</p>

      <Section title="1. Introduction">
        NatureLogs (“we,” “our,” or “us”) operates the <strong>Herp — by NatureLogs</strong> mobile application (the “App”).
        This Privacy Policy explains what information we collect, how we use it, and your choices when using the App.
      </Section>

      <Section title="2. Information We Collect">
        <SubSection title="Account Information">
          Email address, display name, and optional profile information such as profile photo or social handles.
        </SubSection>

        <SubSection title="User Content">
          Observations, photos, audio recordings, trips, waypoints, notes, and tags that you create in the App.
        </SubSection>

        <SubSection title="Location Data">
          <ul className="list-disc ml-5">
            <li>Precise location for observations and treks</li>
            <li>Background location during active trek recording (with permission)</li>
            <li>User-controlled privacy: Public, Generalized, or Private</li>
          </ul>
        </SubSection>

        <SubSection title="Derived Location Data">
          Country, state, and generalized map regions derived from coordinates.
        </SubSection>

        <SubSection title="Social and Interaction Data">
          Friend connections, shared content, likes, and interactions.
          <br />
          We also record when observations are viewed to provide engagement features.
          Only aggregate view counts are shown—viewer identities are not displayed.
        </SubSection>

        <SubSection title="Device and App Data">
          App preferences and subscription status. We do not collect advertising identifiers or track across apps.
        </SubSection>
      </Section>

      <Section title="3. How We Use Information">
        <ul className="list-disc ml-5">
          <li>Provide and operate the App</li>
          <li>Store and display observations and content</li>
          <li>Enable maps, location features, and trek recording</li>
          <li>Support social features and sharing</li>
          <li>Generate highlights and engagement insights</li>
          <li>Improve performance and functionality</li>
        </ul>
      </Section>

      <Section title="4. Third-Party Services">
        <ul className="list-disc ml-5">
          <li><strong>Supabase</strong> — authentication, database, storage</li>
          <li><strong>Mapbox</strong> — maps and map rendering</li>
          <li><strong>Open-Meteo</strong> — weather data enrichment</li>
          <li>
            <strong>iNaturalist (optional)</strong> — data is shared only when you choose to push observations,
            including species, location, photos, and optional notes
          </li>
        </ul>
      </Section>

      <Section title="5. Data Sharing">
        <ul className="list-disc ml-5">
          <li>With other users, based on your privacy settings</li>
          <li>With third-party services required to operate features</li>
          <li>When required by law</li>
        </ul>
        We do not sell your personal data or share it with advertisers.
      </Section>

      <Section title="6. Data Retention">
        We retain your data while your account is active. When you delete your account, your data is permanently removed,
        including observations, media, trips, and social connections.
      </Section>

      <Section title="7. Account Deletion">
        You can delete your account at any time from:
        <br />
        <strong>Settings → Delete Account</strong>
      </Section>

      <Section title="8. Your Choices">
        <ul className="list-disc ml-5">
          <li>Control observation privacy settings</li>
          <li>Choose whether to share data with iNaturalist</li>
          <li>Disable location access in device settings</li>
          <li>Delete your account at any time</li>
        </ul>
      </Section>

      <Section title="9. Children’s Privacy">
        The App is not intended for children under 13, and we do not knowingly collect data from children.
      </Section>

      <Section title="10. Security">
        We take reasonable measures to protect your data, though no system is completely secure.
      </Section>

      <Section title="11. Changes to This Policy">
        We may update this policy periodically. Changes will be reflected on this page.
      </Section>

      <Section title="12. Contact Us">
        If you have questions, contact:
        <br />
        <a href="mailto:support@naturelogs.com" className="text-green-600">
          support@naturelogs.com
        </a>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="font-medium mb-1">{title}</h3>
      <div>{children}</div>
    </div>
  );
}