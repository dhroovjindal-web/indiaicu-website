import { PageLayout } from "@/components/PageLayout";
import { Phone, Info, AlertCircle } from "lucide-react";

const PHONE_TEL = "tel:+918901434774";
const PHONE_DISPLAY = "89014 34774";

export default function Pricing() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0d1b35] py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Pricing &amp; Cancellation Policy
          </h1>
          <p className="text-xl text-blue-100/80 leading-relaxed">
            Indicative pricing information from independent third-party ambulance operators within the IndiaICU network.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl space-y-10">

          {/* Aggregator note */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 flex gap-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>How Pricing Works:</strong> IndiaICU is an aggregator. Ambulance fares are set and charged by the third-party fleet operators in our network. The amounts below are <em>indicative ranges</em> based on typical Delhi NCR and PAN India partner rates. Exact fare is confirmed verbally by our dispatch team before the ambulance is deployed.
            </p>
          </div>

          {/* Fare Table */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Indicative Fare Ranges</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Service Type</th>
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Base Fare (approx.)</th>
                    
                    <th className="text-left px-5 py-4 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    {
                      type: "Basic Ambulance",
                      base: "₹1,000 – ₹1,500",
                      
                      note: "Non-critical transport",
                    },
                    {
                      type: "Oxygen Ambulance",
                      base: "₹1,500 – ₹2,500",
                      
                      note: "Oxygen cylinder included",
                    },
                    {
                      type: "ICU Ambulance",
                      base: "₹3,000 – ₹6,000",
                      
                      note: "Ventilator, monitor, defibrillator",
                    },
                    {
                      type: "Intercity ICU Transfer",
                      base: "₹8,000 – ₹20,000+",
                      
                      note: "Quote confirmed before dispatch",
                    },
                    {
                      type: "Dead Body Freezer Box",
                      base: "₹2,000 – ₹4,000",
                      
                      note: "Home placement or transport",
                    },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-card/50 transition-colors">
                      <td className="px-5 py-4 font-medium text-foreground">{row.type}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.base}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * All figures are indicative. Actual fare confirmed by dispatch before deployment. Night hours (10 PM – 6 AM) and peak-traffic periods may attract a 15–25% surcharge applied by the fleet operator.
            </p>
          </div>

          {/* Price Variables */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Factors That Affect Pricing</h2>
            <ul className="space-y-3">
              {[
                { label: "Distance", desc: "Total kilometres from pickup to destination affects the final fare." },
                { label: "Ambulance type", desc: "ICU and ventilator-equipped vehicles cost more than basic transport." },
                { label: "Night / peak-hour charges", desc: "Fares between 10 PM and 6 AM or during high-traffic periods may be higher." },
                { label: "City / zone", desc: "Fares vary across Delhi NCR, Mumbai, Bengaluru, and other cities based on local partner rates." },
                { label: "Additional equipment", desc: "Special requirements such as a portable ventilator, extra oxygen cylinders, or a second attendant may add to the fare." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{item.label}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div id="cancellation" className="scroll-mt-20">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Cancellation &amp; Refund Policy</h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="divide-y divide-border">
                {[
                  {
                    stage: "Before ambulance is dispatched",
                    fee: "Free",
                    detail: "If you cancel your request before the partner fleet has confirmed dispatch, there is no charge.",
                    color: "text-green-600",
                  },
                  {
                    stage: "After dispatch, before ambulance departs",
                    fee: "₹500 – ₹1000 coordination fee",
                    detail: "A nominal coordination fee may apply to cover the dispatch effort once a fleet partner has been assigned.",
                    color: "text-amber-600",
                  },
                  {
                    stage: "Ambulance already on route",
                    fee: "50% cancellation fee",
                    detail: "If the ambulance has already been dispatched and is on route, 50% of the total fee may be charged by the fleet operator.",
                    color: "text-orange-600",
                  },
                  {
                    stage: "Ambulance arrived at pickup location",
                    fee: "100% cancellation fee",
                    detail: "Once the vehicle has arrived, 100% cancellation fee for that service type is payable.",
                    color: "text-red-600",
                  },
                ].map((row) => (
                  <div key={row.stage} className="px-6 py-5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
                      <span className="font-semibold text-foreground text-sm">{row.stage}</span>
                      <span className={`text-sm font-bold ${row.color}`}>{row.fee}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{row.detail}</p>
                  </div>
                ))}
               </div>
  </div>
</div>



          {/* How to get a quote */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Phone className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Get an Instant Quote</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Call our dispatch team. We'll tell you the fare for your specific route and service type before committing to anything.
              </p>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

        </div> {/* Add this missing closing div right here! */}
      </section>
    </PageLayout>
  );
}
