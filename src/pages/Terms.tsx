import { ReactNode } from "react";
import { PageLayout } from "@/components/PageLayout";

const LAST_UPDATED = "11 June 2026";
const PHONE_DISPLAY = "89014 34774";
const PHONE_TEL = "tel:+918901434774";

export default function Terms() {
  return (
    <PageLayout>
      <section className="bg-[#0d1b35] py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-blue-100/70 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl prose prose-slate max-w-none">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-5 mb-10 not-prose">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-2">Nature of Service</p>
            <p className="text-amber-900 text-sm leading-relaxed">
              IndiaICU is a <strong>technology-based ambulance aggregator and dispatch coordination platform</strong>, not a medical provider, hospital, or emergency medical service. By using this website or calling our dispatch number, you agree to these Terms of Service.
            </p>
          </div>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed not-prose">

            <Section title="1. Definitions">
              <ul className="space-y-2">
                <li>   <strong className="text-foreground">"IndiaICU"</strong> refers to the digital aggregator platform operated by Dhroov Jindal (Sole Proprietor), Hisar, Haryana, India. </li>
                <li><strong className="text-foreground">"Platform"</strong> refers to the IndiaICU website and dispatch contact number.</li>
                <li><strong className="text-foreground">"Partner Fleet"</strong> refers to the independent third-party ambulance vehicle operators in IndiaICU's network.</li>
                <li><strong className="text-foreground">"User"</strong> refers to any individual who accesses the Platform or contacts IndiaICU for dispatch coordination.</li>
              </ul>
            </Section>

            <Section title="2. Nature of Platform — Aggregator, Not Medical Provider">
              <p>IndiaICU provides <strong className="text-foreground">dispatch coordination services only</strong>. We:</p>
              <ul className="space-y-2 mt-3">
                <li>Do <strong className="text-foreground">not</strong> own, operate, or maintain ambulance vehicles.</li>
                <li>Do <strong className="text-foreground">not</strong> employ doctors, paramedics, nurses, or any medical personnel.</li>
                <li>Do <strong className="text-foreground">not</strong> hold any medical institution license, hospital registration, or EMS authorization.</li>
                <li>Do <strong className="text-foreground">not</strong> provide medical advice, diagnosis, or treatment.</li>
                <li><strong className="text-foreground">Connect</strong> users with independent third-party ambulance fleet operators who provide the actual ambulance service.</li>
              </ul>
              <p className="mt-3">In genuine life-threatening emergencies, users are strongly advised to also contact the national emergency number <strong className="text-foreground">112</strong>.</p>
            </Section>

            <Section title="3. Eligibility and Acceptance">
              <p>By using the Platform you confirm you are at least 18 years of age or are using the Platform under the supervision of a parent or guardian. Use of the Platform constitutes acceptance of these Terms.</p>
            </Section>

            <Section title="4. Dispatch Coordination Process">
              <p>When you contact IndiaICU:</p>
              <ol className="space-y-2 mt-3 list-decimal list-inside">
                <li>Our team will collect the caller's name, phone number, pickup location, and type of ambulance required.</li>
                <li>We will coordinate with our network of Partner Fleets to identify the nearest available vehicle.</li>
                <li>We will confirm the estimated fare and ETA before deployment.</li>
                <li>The dispatched ambulance is operated by the Partner Fleet. The contract for the ambulance service is between the User and the Partner Fleet operator.</li>
              </ol>
            </Section>

            <Section title="5. Limitation of Liability">
              <p>To the maximum extent permitted by applicable law:</p>
              <ul className="space-y-2 mt-3">
                <li>IndiaICU's liability is <strong className="text-foreground">limited to dispatch coordination</strong> and does not extend to the medical performance, clinical outcomes, or conduct of Partner Fleet operators.</li>
                <li>IndiaICU is not responsible for delays caused by traffic, fleet availability, acts of God, or any circumstances outside its direct control.</li>
                <li>IndiaICU is not liable for personal injury, death, medical complications, or property damage arising from the actions or omissions of a Partner Fleet operator.</li>
                <li>IndiaICU's total aggregate liability, in any case, shall not exceed the dispatch coordination fee paid to IndiaICU (if any) for the specific service request in question.</li>
              </ul>
            </Section>

            <Section title="6. Pricing and Payment">
              <p>Ambulance fares are set by Partner Fleets and are paid directly to the fleet operator. IndiaICU confirms the fare with the User before dispatch. For full pricing information, see our <a href="/pricing" className="text-primary underline">Pricing &amp; Cancellation Policy</a>.</p>
            </Section>

            <Section title="7. Cancellation">
              <p>Cancellation terms depend on the stage of dispatch. Please refer to the <a href="/pricing#cancellation" className="text-primary underline">Cancellation Policy</a> on our Pricing page for full details.</p>
            </Section>

            <Section title="8. User Responsibilities">
              <ul className="space-y-2">
                <li>Provide accurate information when making a dispatch request.</li>
                <li>Ensure the patient is accessible and ready for transport at the stated pickup address.</li>
                <li>Arrange appropriate payment for the ambulance directly with the fleet operator.</li>
                <li>Not misuse the Platform for non-emergency or fraudulent requests.</li>
              </ul>
            </Section>

            <Section title="9. Intellectual Property">
              <p>All content on this website, including text, graphics, and design, is the property of Dhroov Jindal (IndiaICU) and may not be reproduced without written permission.</p>
            </Section>

            <Section title="10. Governing Law and Jurisdiction">
              <p>These Terms shall be governed by the laws of India, including the Information Technology Act, 2000, and the Consumer Protection Act, 2019. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hisar, Haryana, India.</p>
            </Section>

            <Section title="11. Amendments">
              <p>IndiaICU reserves the right to update these Terms at any time. Continued use of the Platform after changes are posted constitutes acceptance of the revised Terms.</p>
            </Section>

            <Section title="12. Contact">
  <p>
    For any questions about these Terms, contact us at{" "}
    <a href="mailto:dhroovjindal@gmail.com" className="text-primary underline">
      dhroovjindal@gmail.com
    </a>{" "}
    or call{" "}
    <a href={PHONE_TEL} className="text-primary underline font-semibold">
      {PHONE_DISPLAY}
    </a>.

    <br />
    <br />

    Website:{" "}
    <a
      href="https://www.indiaicu.com"
      className="text-primary underline"
    >
      www.indiaicu.com
    </a>
  </p>
</Section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-heading text-lg font-bold text-foreground">{title}</h2>
      {children}
    </div>
  );
}
