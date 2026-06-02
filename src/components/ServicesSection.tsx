import { Activity, Wind, HeartPulse, Stethoscope, Map, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      title: "ICU Ambulance",
      description: "Advanced life support with ventilator, defibrillator, trained paramedics and on-call doctors.",
      icon: Activity,
      color: "text-primary"
    },
    {
      title: "Oxygen Ambulance",
      description: "Equipped with medical oxygen for respiratory emergencies and support.",
      icon: Wind,
      color: "text-blue-600"
    },
    {
      title: "Dead Body Freezer Box (Home)",
      description: "24/7 freezer box available for maintaining body at home or any location, with dignified care.",
      icon: HeartPulse,
      color: "text-primary"
    },
    {
      title: "Basic Ambulance",
      description: "Rapid patient transport for non-critical medical situations.",
      icon: Stethoscope,
      color: "text-blue-600"
    },
    {
      title: "Intercity Transfer",
      description: "Long-distance transport safely maintaining ICU-level care in transit.",
      icon: Map,
      color: "text-primary"
    },
    {
      title: "Dead Body Freezer Van",
      description: "Dignified and respectful transport with temperature control.",
      icon: Snowflake,
      color: "text-blue-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Critical Care Transport
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized vehicles equipped for every level of medical urgency, manned by certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-border hover:border-primary/40 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4">
                <service.icon className="w-32 h-32" />
              </div>
              <CardContent className="p-8 relative z-10">
                <service.icon className={`h-10 w-10 ${service.color} mb-6`} />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
