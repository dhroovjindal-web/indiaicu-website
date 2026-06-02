import { Rocket, Globe, UserCheck, Clock, IndianRupee } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Fast Response",
      description: "Ambulance dispatched at the earliest — every second counts.",
      icon: Rocket,
    },
    {
      title: "PAN India Network",
      description: "Active in 50+ cities across the country.",
      icon: Globe,
    },
    {
      title: "Trained Paramedics & Doctors",
      description: "ICU-trained paramedics and doctors on board.",
      icon: UserCheck,
    },
    {
      title: "24/7 Support",
      description: "Always available, day or night.",
      icon: Clock,
    },
    {
      title: "Affordable Pricing",
      description: "No hidden costs, transparent rates.",
      icon: IndianRupee,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Uncompromising Standards
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl">
          When seconds matter, you need a service built on precision, speed, and absolute reliability.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-8 hide-scrollbar px-4 sm:px-8 gap-6 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 container mx-auto">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-64 md:w-auto flex flex-col gap-4 border-l-2 border-border pl-6 py-2 relative hover:border-primary/40 transition-colors"
          >
            <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-blue-600" />
            
            <div className="h-12 w-12 rounded-lg bg-card flex items-center justify-center border border-border shadow-sm">
              <reason.icon className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
