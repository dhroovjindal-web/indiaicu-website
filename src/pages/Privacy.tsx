import { PageLayout } from "@/components/PageLayout";

const LAST_UPDATED = "11 June 2026";
const PHONE_TEL = "tel:+918901434774";
const PHONE_DISPLAY = "89014 34774";

export default function Privacy() {
  return (
    <PageLayout>
      <section className="bg-[#0d1b35] py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-100/70 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

            <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-5">
              <p className="text-blue-800 leading-relaxed text-sm">
                IndiaICU (operated by Dhroov Jindal, Hisar, Haryana, India) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights under applicable Indian law, including the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>
            </div>

            <Section title="1. Data Controller">
              <p>
                The data controller for information collected through this Platform is:
                <br /><strong className="text-foreground">Dhroov Jindal (operating as IndiaICU)</strong>
                <br />H No. 126, Gali Chabbil Das, Gandhi Chowk, Hisar, Haryana, India
                <br /><a href="mailto:dhroovjindal@gmail.com" className="text-primary underline">dhroovjindal@gmail.com</a>
                {" | "}
                <a href={PHONE_TEL} className="text-primary underline">{PHONE_DISPLAY}</a>
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect the following information when you contact us or submit a booking request:</p>
              <ul className="space-y-2 mt-3">
                <li><strong className="text-foreground">Name:</strong> To address the caller and communicate with the patient's family.</li>
                <li><strong className="text-foreground">Phone number:</strong> To coordinate the dispatch and follow up.</li>
                <li><strong className="text-foreground">City / Pickup location:</strong> To identify the nearest available partner fleet.</li>
                <li><strong className="text-foreground">Medical condition description (optional):</strong> Provided voluntarily to help the dispatch team select the appropriate vehicle type.</li>
                <li><strong className="text-foreground">Website usage data:</strong> Standard analytics data (pages visited, session duration, device type) collected via Google Analytics, used in aggregate to improve the service.</li>
              </ul>
              <p className="mt-3">We do not collect payment card information — payments are made directly to the fleet operator.</p>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul className="space-y-2">
                <li>To process and coordinate your ambulance dispatch request.</li>
                <li>To communicate with you regarding the status of your request.</li>
                <li>To pass necessary information (pickup location, service type) to the Partner Fleet operator handling your request.</li>
                <li>To improve our dispatch processes and website experience.</li>
                <li>To comply with applicable legal obligations.</li>
              </ul>
              <p className="mt-3">We do <strong className="text-foreground">not</strong> use your personal data for marketing purposes without your explicit consent.</p>
            </Section>

            <Section title="4. Information Sharing">
              <p>We share your information only in the following limited circumstances:</p>
              <ul className="space-y-2 mt-3">
                <li><strong className="text-foreground">Partner Fleet Operators:</strong> We share pickup location, contact details, and service requirements with the ambulance fleet operator assigned to your request, solely to fulfil the dispatch.</li>
                <li><strong className="text-foreground">Legal requirements:</strong> We may disclose information if required by law, court order, or government authority.</li>
                <li><strong className="text-foreground">Service providers:</strong> We use Google Analytics for aggregate website analytics. No personally identifiable dispatch request data is shared with Google.</li>
              </ul>
              <p className="mt-3">We do <strong className="text-foreground">not</strong> sell, rent, or trade your personal information to any third party for commercial purposes.</p>
            </Section>

            <Section title="5. Data Retention">
              <p>Dispatch request records (name, phone, city, ambulance type) are retained for up to 12 months for operational and dispute resolution purposes, after which they are securely deleted. Website analytics data is retained per Google Analytics' standard retention settings.</p>
            </Section>

            <Section title="6. Cookies">
              <p>This website uses cookies for:</p>
              <ul className="space-y-1 mt-2">
                <li><strong className="text-foreground">Analytics:</strong> Google Analytics uses cookies to collect aggregate usage data.</li>
                <li><strong className="text-foreground">Advertising:</strong> Google Ads conversion tracking uses cookies to measure call-based conversions.</li>
              </ul>
              <p className="mt-2">You can disable cookies in your browser settings at any time. This will not affect the core functionality of our dispatch service.</p>
            </Section>

            <Section title="7. Your Rights">
              <p>Under applicable Indian law, you have the right to:</p>
              <ul className="space-y-2 mt-3">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your personal data (subject to legal retention requirements).</li>
                <li>Withdraw consent for data processing (where processing is consent-based).</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, email us at{" "}
                <a href="mailto:dhroovjindal@gmail.com" className="text-primary underline">dhroovjindal@gmail.com</a>.
                We will respond within 30 days.
              </p>
            </Section>

            <Section title="8. Data Security">
              <p>We implement reasonable technical and organisational security measures to protect your personal information from unauthorised access, disclosure, or misuse, in accordance with the IT (Amendment) Act, 2008, and the SPDI Rules, 2011. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
            </Section>

            <Section title="9. Children's Privacy">
              <p>Our Platform is not directed at children under 13. We do not knowingly collect personal data from children. Ambulance requests on behalf of minors are made by a parent or guardian.</p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page indicates the most recent revision. Continued use of the Platform after changes are posted constitutes acceptance of the updated Policy.</p>
            </Section>

            <Section title="11. Contact & Grievance Officer">
              <p>
                For any privacy-related queries, complaints, or requests, please contact:
              </p>
              <div className="mt-3 p-4 rounded-lg bg-card border border-border text-foreground">
                <p className="font-semibold">Dhroov Jindal</p>
                <p className="text-muted-foreground">Operating as IndiaICU, H No. 126, Gali Chabbil Das, Gandhi Chowk, Hisar, Haryana, India</p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:dhroovjindal@gmail.com" className="text-primary underline">dhroovjindal@gmail.com</a>
                </p>
                <p className="text-muted-foreground">
                  Phone: <a href={PHONE_TEL} className="text-primary underline font-semibold">{PHONE_DISPLAY}</a>
                </p>
                <p className="text-muted-foreground">
  Website:{" "}
  <a
    href="https://www.indiaicu.com"
    className="text-primary underline"
  >
    www.indiaicu.com
  </a>
</p>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-heading text-lg font-bold text-foreground">{title}</h2>
      {children}
    </div>
  );
}
