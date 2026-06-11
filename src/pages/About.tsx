import { PageLayout } from "@/components/PageLayout";
import { ShieldCheck, Network, MapPin, UserCheck, Phone } from "lucide-react";

const PHONE_TEL = "tel:+918901434774";
const PHONE_DISPLAY = "89014 34774";

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0d1b35] py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-300 mb-6">
            <Network className="mr-2 h-4 w-4" />
            Ambulance Aggregator &amp; Dispatch Network
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            About IndiaICU
          </h1>
          <p className="text-xl text-blue-100/80 leading-relaxed">
            We are a digital ambulance aggregator and dispatch coordination service — not a medical provider, hospital, or fleet owner.
          </p>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl space-y-8">
          <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-2">Important Disclosure</p>
            <p className="text-amber-900 leading-relaxed">
              IndiaICU is an <strong>independent digital aggregator and dispatch network</strong>. We do not own ambulances, employ doctors or paramedics, or hold any hospital or medical institution license. All ambulance vehicles and medical personnel are provided by independent third-party fleet operators whose services we coordinate on your behalf.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IndiaICU is operated by <strong>Dhroov Jindal</strong> as a sole proprietorship based in Haryana, India. We are a technology-enabled dispatch coordination service that helps individuals and families quickly connect with verified third-party ambulance fleet operators during medical emergencies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We operate as an aggregator platform — similar to how a cab-aggregator connects riders with independent drivers — except we connect people in medical emergencies with ambulance fleet operators across India.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why We Started</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Emergency ambulance dispatch in India, particularly in Delhi NCR, has historically been fragmented. When a family member faces a medical crisis, locating the right type of ambulance — ICU-equipped, oxygen-enabled, or intercity-ready — at short notice is extremely stressful and time-consuming.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              IndiaICU was built to solve this coordination problem. By maintaining a vetted network of third-party ambulance fleet operators and providing a single contact point, we aim to reduce the time it takes to dispatch the right vehicle — giving callers one less thing to worry about during an emergency.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What We Do</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {[
                {
                  icon: Network,
                  title: "Dispatch Coordination",
                  desc: "We act as a central coordination point, connecting your call to the nearest available verified fleet operator for the service type you need.",
                },
                {
                  icon: ShieldCheck,
                  title: "Partner Fleet Verification",
                  desc: "We work only with ambulance operators we have vetted for vehicle condition, equipment availability, and driver reliability.",
                },
                {
                  icon: MapPin,
                  title: "PAN India Reach",
                  desc: "Our network of partner fleets spans Delhi NCR and major cities across India, enabling intercity transfer coordination as well.",
                },
                {
                  icon: UserCheck,
                  title: "Accountability Layer",
                  desc: "When you call IndiaICU, you have a single accountable point of contact for your dispatch request — even though the ambulance is operated by a third party.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-card border border-border">
                  <item.icon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What We Are Not</h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "We are not a hospital or medical institution.",
                "We do not own, operate, or maintain any ambulance vehicles.",
                "We do not employ doctors, nurses, paramedics, or any medical personnel.",
                "We are not a direct emergency medical service (EMS) provider.",
                "We do not guarantee specific response times — these depend on third-party fleet availability and traffic.",
                "We are not responsible for the medical performance or clinical decisions of third-party fleet operators.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Contact Us</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Legal Name:</strong> Dhroov Jindal (operating as IndiaICU)</p>
              <p>   <strong className="text-foreground">Location:</strong>   {" "}S/O: Anil Kumar, house no-8/126, chbila dass ki gali, delhi gate
Hisar, Haryana, India </p>
              <p><strong className="text-foreground">Support:</strong>{" "}
                <a href={PHONE_TEL} className="text-primary font-semibold hover:underline">{PHONE_DISPLAY}</a>
                {" "}(24/7 Dispatch)
              </p>
              <p><strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:dhroovjindal@gmail.com" className="hover:text-foreground transition-colors">
  dhroovjindal@gmail.com
</a>
              </p>
              <p>
  <strong className="text-foreground">Website:</strong>{" "}
  <a
    href="https://www.indiaicu.com"
    className="hover:text-foreground transition-colors"
  >
    www.indiaicu.com
  </a>
</p>
              <p>
  <strong className="text-foreground">Support Hours:</strong>{" "}
  24/7 Dispatch Coordination
</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
