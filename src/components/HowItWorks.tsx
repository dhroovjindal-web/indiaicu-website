import { PhoneCall, MapPin, Ambulance } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Call or WhatsApp",
      description: "Reach out to our 24/7 emergency dispatch center.",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "Share Details",
      description: "Provide your location and the patient's medical condition.",
      icon: MapPin,
    },
    {
      num: "03",
      title: "Ambulance Dispatched",
      description: "The nearest required ambulance is routed immediately.",
      icon: Ambulance,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Emergency Protocol
          </h2>
          <p className="text-muted-foreground mt-3">Three steps from call to care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-border via-primary/40 to-border -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              <div className="h-24 w-24 rounded-full bg-white border-2 border-blue-100 shadow-md flex items-center justify-center mb-6 z-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <step.icon className="h-10 w-10 text-blue-700 relative z-10" />
              </div>
              <div className="text-primary font-mono text-sm font-bold mb-2 tracking-widest">{step.num}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
