import { ArrowRight, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function IntercitySection() {
  const routes = [
    { from: "Delhi", to: "Mumbai" },
    { from: "Delhi", to: "Lucknow" },
    { from: "Chandigarh", to: "Chennai" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1e3a6e 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <Map className="mr-2 h-4 w-4" />
              Long Distance Support
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
              Intercity ICU <br className="hidden sm:block"/> Transfers
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Safely transfer critical patients between any cities across India with full ICU support in transit. Our specialized long-haul vehicles maintain hospital-grade care across state lines.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Map className="h-4 w-4" />
              PAN India — Any City to Any City
            </div>
            <div className="pt-2">
              <a href="tel:+918901434774" className="text-primary hover:text-foreground font-semibold flex items-center gap-2 transition-colors text-lg" data-testid="link-intercity-call">
                Consult Dispatch Team <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {routes.map((route, i) => (
              <Card key={i} className="bg-white border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Origin</p>
                      <p className="text-xl font-bold text-foreground">{route.from}</p>
                    </div>
                    <div className="flex-shrink-0 px-4">
                      <div className="h-[2px] w-16 md:w-32 bg-border relative">
                        <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-primary bg-white h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Destination</p>
                      <p className="text-xl font-bold text-foreground">{route.to}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
